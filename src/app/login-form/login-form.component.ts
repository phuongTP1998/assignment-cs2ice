import { Component, OnInit } from "@angular/core";
import { DataService } from "../date-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
  isUserLoggedIn: boolean;

  constructor(private dataService: DataService, private router: Router) {
    this.dataService.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
    });
  }

  ngOnInit() {}

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector("#username").value;
    const password = target.querySelector("#password").value;

    if (username === "admin@gmail.com" && password === "123456") {
      this.dataService.isUserLoggedIn.next(true);
    }
  }

  logOut() {
    console.log("logout");
    this.dataService.isUserLoggedIn.next(false);
  }
}
