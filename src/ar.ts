import { Promise } from "es6-promise";
import { CustomAPI } from "../codegen/api";
/**
* ArAPI - Helper class that connects to
* the Dive's Ad Resonance API
* and performs business logic
*/
export class ArAPI extends CustomAPI {
  /**
   * Performs login on the Dive AR API
   * @summary Perform Login
   * @param username User name of the user
   * @param password MD5 password of the user
   */
  public login = (params: { username: string, password: string }) => {
    return this.postTokenAndSave({ grantType: "user_credentials", username: params.username, password: params.password });
  }
}
export * from "../codegen/api";
export const ArAPIClass = ArAPI;