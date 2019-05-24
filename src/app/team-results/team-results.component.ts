import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "../date-service.service";
import { Team } from "../Model/team";
import { Game } from "../Model/game";
import { Tip } from "../Model/tip";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-team-results",
  templateUrl: "./team-results.component.html",
  styleUrls: ["./team-results.component.css"]
})
export class TeamResultsComponent implements OnInit {
  constructor(private dataService: DataService) {}

  teams: Team[];
  games: Game[];
  tips: Tip[];

  ngOnInit() {
    this.getAFLTeams();
    this.getGames();
    this.getTips();
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => {
      this.teams = temp;
    });
  }

  getGames(): void {
    this.dataService
      .getGames("https://api.squiggle.com.au/?q=games;year=2019")
      .subscribe(temp => {
        this.games = temp.filter(
          (team: any) =>
            (team.complete == 100 && team.ateam == "Hawthorn") ||
            (team.complete == 100 && team.hteam == "Hawthorn")
        );
      });
  }

  getTips(): void {
    this.dataService.getTips().subscribe(temp => {
      this.tips = temp;
    });
  }
}
