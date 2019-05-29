import { Component, OnInit } from "@angular/core";
import { DataService } from "../date-service.service";
import { Router } from "@angular/router";
import { AuthenticationService } from "./../authentication-service.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
  isUserLoggedIn: boolean;
  username: string;
  password: string;

  constructor(
    private dataService: DataService,
    private router: Router,
    private authentication: AuthenticationService
  ) {
    this.username = "";
    this.password = "";
    this.dataService.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
    });
  }

  ngOnInit() {}

  login() {
    var check = this.authentication.loginIn(this.username, this.password);
    if (check) {
      this.dataService.isUserLoggedIn.next(true);
      alert("Hello: " + this.username);
    } else {
      alert("Failed");
    }
  }

  register() {
    var check = this.authentication.registerUser(this.username, this.password);
    if (check) {
      this.dataService.isUserLoggedIn.next(true);
      alert("Register successful with username: " + this.username);
    } else {
      alert("Failed");
    }
  }

  logOut() {
    this.dataService.isUserLoggedIn.next(false);
    alert("See you soon " + this.username);
  }
}
