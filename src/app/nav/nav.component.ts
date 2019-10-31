import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { AlertifyService } from "../_services/alertify.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private alertifyService: AlertifyService
  ) {}

  model: any = {};

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        this.alertifyService.success("Giriş başarılı!");
      },
      error => {
        this.alertifyService.error("Hatalı kullanıcı adı veya şifre!");
      }
    );
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  logOut() {
    localStorage.removeItem("token");
    this.alertifyService.success("Çıkış başarılı!");
  }

  ngOnInit() {}
}
