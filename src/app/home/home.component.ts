import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    // this.getValues();
  }

  registerToggle() {
    this.registerMode = true;
  }

  // values: any;

  // getValues() {
  //   this.httpClient.get("http://localhost:4004/api/values").subscribe(
  //     response => {
  //       this.values = response;
  //       console.log(this.values);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = false;
  }
}
