import {  CanActivate,  ActivatedRouteSnapshot,  RouterStateSnapshot,  Router} from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { AlertifyService } from '../_services/alertify.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authservice: AuthService, private router: Router, private alertify:AlertifyService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let logged = this.authservice.isLoggedIn();

    if (logged) {
      return true;
    }
    this.router.navigate(["home"]);
    this.alertify.error("Sayfaya erişim için sisteme giriş yapmalısınız!");
    return false;
  }
}
