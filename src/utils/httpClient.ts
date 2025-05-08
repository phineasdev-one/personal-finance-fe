import axios, { AxiosInstance, CancelToken } from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

interface ApiRequest {}
interface ApiResponse {}
interface ApiParams {}

type RequestOptions<P extends ApiParams> = {
  params?: P;
  cancelToken?: CancelToken;
  token?: string;
};

function generateClient(host: string) {
  /**
   * Validate response status
   * @param status {number}
   * @returns {boolean}
   */
  function validateStatus(status: number): boolean {
    return status >= 200 && status < 400;
  }

  const axiosInstance: AxiosInstance = axios.create({
    baseURL: host,
    validateStatus,
  });

  /**
   * Initialization authenticate
   * @returns
   */
  function initAuthenticate(token: string) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  /**
   * Logout function
   * @returns
   */
  function logout() {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${null}`;
  }

  /**
   * GET method
   * @param {string} path - path after domain
   * @param {T} [request] - get parameters
   * @param {RequestOptions<P>} [options]  - http request options
   * @returns {Promise<R>} api response
   * @template T, R, P
   */
  async function get<T extends ApiRequest, R extends ApiResponse, P extends ApiParams = ApiParams>(
    path: string,
    request?: T,
    options?: RequestOptions<P>,
  ): Promise<R> {
    return axiosInstance
      .get(path, {
        params: {
          ...request,
          ...options?.params,
        },
        cancelToken: options?.cancelToken,
      })
      .then((response) => response.data);
  }

  /**
   * POST method
   * @param {string} path - path after domain
   * @param {T} request - request body
   * @param {RequestOptions<P>} [options] - http request options
   * @returns {Promise<R>} api response
   * @template T, R, P
   */
  async function post<T extends ApiRequest, R extends ApiResponse, P extends ApiParams = ApiParams>(
    path: string,
    request: T,
    options?: RequestOptions<P>,
  ): Promise<R> {
    return axiosInstance
      .post(path, request, {
        params: {
          ...options?.params,
        },
        cancelToken: options?.cancelToken,
      })
      .then((response) => response.data);
  }

  /**
   * PUT method
   * @param {string} path - path after domain
   * @param {T} request - request body
   * @param {RequestOptions<P>} [options] - http request options
   * @returns {Promise<R>} api response
   * @template T, R, P
   */
  async function put<T extends ApiRequest, R extends ApiResponse, P extends ApiParams = ApiParams>(
    path: string,
    request: T,
    options?: RequestOptions<P>,
  ): Promise<R> {
    return axiosInstance
      .put(path, request, {
        params: {
          ...options?.params,
        },
        cancelToken: options?.cancelToken,
      })
      .then((response) => response.data);
  }

  /**
   * PUT method
   * @param {string} path - path after domain
   * @param {T} request - request body
   * @param {RequestOptions<P>} [options] - http request options
   * @returns {Promise<R>} api response
   * @template T, R, P
   */
  async function patch<T extends ApiRequest, R extends ApiResponse, P extends ApiParams = ApiParams>(
    path: string,
    request?: T,
    options?: RequestOptions<P>,
  ): Promise<R> {
    return axiosInstance
      .patch(path, request, {
        params: {
          ...options?.params,
        },
        cancelToken: options?.cancelToken,
      })
      .then((response) => response.data);
  }

  /**
   * DELETE method
   * @param {string} path - path after domain
   * @param {RequestOptions<P>} [options] - http request options
   * @returns {Promise<R>} api response
   * @template R, P
   */
  async function deleteRequest<R extends ApiResponse, P extends ApiParams = ApiParams>(
    path: string,
    options?: RequestOptions<P>,
  ): Promise<R> {
    return axiosInstance
      .delete(path, {
        params: {
          ...options?.params,
        },
        cancelToken: options?.cancelToken,
      })
      .then((response) => response.data);
  }

  return {
    get,
    put,
    post,
    patch,
    logout,
    axiosInstance,
    initAuthenticate,
    delete: deleteRequest,
  };
}

export const httpClient = generateClient(apiUrl);
