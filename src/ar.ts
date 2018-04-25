import { CustomAPI } from "../codegen/api";
/**
* ArAPI - Helper class that connects to
* the Dive's Ad Resonance API
* and performs business logic
*/
export class ArAPI extends CustomAPI {
  public constructor(params: any) {
    super(params);
    this.noAuthServices = ['postToken'];
  }
  /**
   * Performs login on the Dive AR API
   * @summary Perform Login
   * @param username User name of the user
   * @param password MD5 password of the user
   */
  public login = (params: { username: string, password: string, client_id?: string }) => {
    return this.postTokenAndSave({ grantType: "user_credentials", username: params.username, password: params.password, clientId: params.client_id });
  }

}
export * from "../codegen/api";
export const ArAPIClass = ArAPI;