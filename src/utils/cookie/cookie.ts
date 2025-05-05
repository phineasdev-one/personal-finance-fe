import Cookies from "js-cookie";

import { Cookie } from "./constants";

export function setCookie(cookie: Cookie, value: string | object) {
  const cookieValue = typeof value === "object" ? JSON.stringify(value) : value;
  Cookies.set(cookie.name, cookieValue, { ...cookie.options });
}

export function getCookie(cookie: Cookie) {
  return Cookies.get(cookie.name);
}

export function removeCookie(cookie: Cookie) {
  Cookies.remove(cookie.name);
}
