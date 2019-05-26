import { Component, Input } from "@angular/core";
import { DataService } from "./date-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  isUserLoggedIn: boolean;

  constructor(private dataService: DataService) {
    this.dataService.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
    });
  }

  ngOnInit() {}

  title = "my-first-app";
}
