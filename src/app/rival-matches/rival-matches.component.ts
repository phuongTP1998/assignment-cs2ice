import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "../date-service.service";
import { Team } from "../Model/team";
import { Game } from "../Model/game";
import { Tip } from "../Model/tip";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-rival-matches",
  templateUrl: "./rival-matches.component.html",
  styleUrls: ["./rival-matches.component.css"]
})
export class RivalMatchesComponent implements OnInit {
  constructor(private dataService: DataService) {}

  games: Game[];
  showSpinner: boolean;

  ngOnInit() {}

  getGames(teamName: string): void {
    console.log(teamName);
    this.dataService
      .getGames("https://api.squiggle.com.au/?q=games;")
      .subscribe(temp => {
        this.games = temp.filter(
          (team: any) =>
            (team.hteam == teamName && team.ateam == "Hawthorn") ||
            (team.ateam == teamName && team.hteam == "Hawthorn")
        );
      })
      .add(() => (this.showSpinner = false));
  }

  searchRival(event) {
    console.log("fired");
    this.showSpinner = true;
    event.preventDefault();
    const target = event.target;
    const teamName = target.querySelector("#search").value;

    this.getGames(teamName);
  }
}
