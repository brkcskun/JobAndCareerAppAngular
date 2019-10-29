import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  loggedIn = false;

  login(model: any) {
    return this.httpClient.post(environment.baseUrl + "Authenticate", model).pipe(
      map(function(response: any) {
        const user = response;
        if (user) {
          localStorage.setItem("token", user.token);
          this.loggedIn=true;
        }
      })
    );
  }

  // register(model: any) {
  //   return this.httpClient.post(environment.baseUrl + "Register", model);
  // }

  isLoggedIn() {
    if (localStorage.getItem("token")) {
      return true;
    }    
    return false;
  }

  logOut() {
    localStorage.removeItem("token");
  }

}
