import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService,private alertifyService:AlertifyService) {}

  // model: any = {}; 

  // register() {
  //   this.authService.register(this.model).subscribe(
  //     function() {
  //       this.alertifyService.success("Registeration successful!");
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

  // cancel() {
  //   this.cancelRegister.emit(false);
  //   this.alertifyService.warning("Registeration successful!");
  // }

  ngOnInit() {}
}
