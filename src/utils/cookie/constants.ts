type CookieOptions = {
  expires?: number;
  path?: string;
  domain?: string;
};

export class Cookie {
  static ACCESS_TOKEN = new Cookie("accessToken");

  private constructor(
    private _name: string,
    private _options: CookieOptions = {},
  ) {}

  get name() {
    return this._name;
  }

  get options() {
    return this._options;
  }
}
