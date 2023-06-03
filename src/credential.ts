import { AccessToken, GetTokenOptions, TokenCredential } from "@azure/core-auth";

export class Credential implements TokenCredential {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  getToken(scopes: string | string[], options?: GetTokenOptions | undefined): Promise<AccessToken | null> {
    return Promise.resolve({
      token: this.token,
      expiresOnTimestamp: 0
    });
  }
}