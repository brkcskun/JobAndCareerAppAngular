import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  baseUrl = "http://localhost:4004/Users/";

  login(model: any) {
    return this.httpClient.post(this.baseUrl + "Authenticate", model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem("token", user.token);
        }
      })
    );
  }

  register(model: any) {
    return this.httpClient.post(this.baseUrl + "Register", model);
  }
}
