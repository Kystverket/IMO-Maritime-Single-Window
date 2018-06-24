
export class TokenQueryModel {
  userId: string;
  token: string;
  constructor(userId: string, token: string) {
    this.setUserId(userId);
    this.setToken(token);
  }
  setUserId(userId: string): void {
    this.userId = encodeURIComponent(userId);
  }
  setToken(token: string): void {
    this.token = encodeURIComponent(token);
  }
}
