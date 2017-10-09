import LocalStorageService, { TOKEN, USER } from 'Services/LocalStorageService';

const ACCESS_TOKEN = 'access_token';

class SessionService {
  constructor() {
    this.document = document;
  }

  getCookie() {
    return document.cookie;
  }

  setCookie(name, value) {
    const resultValue = encodeURIComponent(value);
    const expires = new Date(new Date().getTime() + (60 * 60 * 24 * 7 * 1000)).toUTCString();

    document.cookie = `${name}=${resultValue}; path=/; expires=${expires}`;
  }

  removeCookie(name) {
    document.cookie = `${name}=; path=/; expires=${new Date(0).toUTCString()}`;
  }

  signIn(user, token) {
    this.setCookie(ACCESS_TOKEN, token.value);

    LocalStorageService.set(TOKEN, token.value);
    LocalStorageService.set(USER, user);
  }

  signOut() {
    this.removeCookie(ACCESS_TOKEN);

    LocalStorageService.remove(TOKEN);
    LocalStorageService.remove(USER);
  }
}

export default new SessionService();
