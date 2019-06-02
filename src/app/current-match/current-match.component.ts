import { Component, OnInit } from "@angular/core";
import { DataService } from "../date-service.service";
import { Team } from "../Model/team";
import { Game } from "../Model/game";

@Component({
  selector: "app-current-match",
  templateUrl: "./current-match.component.html",
  styleUrls: ["./current-match.component.css"]
})
export class CurrentMatchComponent implements OnInit {
  showSpinner: boolean;

  games: Game[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getGames();
  }

  getGames(): void {
    this.showSpinner = true;
    this.dataService
      .getGames("https://api.squiggle.com.au/?q=games&year=2019&complete=0")
      .subscribe(temp => {
        this.games = temp;
      })
      .add(() => (this.showSpinner = false));
  }
}
