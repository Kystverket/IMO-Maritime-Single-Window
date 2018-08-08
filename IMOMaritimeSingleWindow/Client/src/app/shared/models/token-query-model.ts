
export class TokenQueryModel {
  userId: string;
  token: string;
  constructor(userId: string, token: string, uriEncode = true) {
    if (uriEncode) {
      this.setUserId(userId);
      this.setToken(token);
    } else {
      this.userId = userId;
      this.token = token;
    }
  }
  setUserId(userId: string): void {
    this.userId = encodeURIComponent(userId);
  }
  setToken(token: string): void {
    this.token = encodeURIComponent(token);
  }
}
