 import { API } from "../api/api"
 
 export class Auth {
   api = new API()
   async signUp(username: string, pass: string) {
      const response = await this.api.authPost(
         "/auth/register", 
         {
            username: username,
            password: pass,
         }
      );
      localStorage.setItem("token", response.data.access_token)
      return response;
   }
   async signIn(username: string, pass: string) {
      const response = await this.api.authPost(
         "/auth/login", 
         {
            username: username,
            password: pass,
         },
      );
      localStorage.setItem("token", response.data.access_token);
      return response;
   }
 }