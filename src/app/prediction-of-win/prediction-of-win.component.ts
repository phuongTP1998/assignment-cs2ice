import { Component, OnInit } from "@angular/core";

import { DataService } from "../date-service.service";
import { Team } from "../Model/team";
import { Game } from "../Model/game";
import { Tip } from "../Model/tip";
import { forEach } from '@angular/router/src/utils/collection';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: "app-prediction-of-win",
  templateUrl: "./prediction-of-win.component.html",
  styleUrls: ["./prediction-of-win.component.css"]
})
export class PredictionOfWinComponent implements OnInit {
  constructor(private dataService: DataService) {}

  showSpinner: boolean;

  teams: Team[];
  games: Game[];
  tips: Tip[];

  ngOnInit() {
    this.getAFLTeams();
    this.getGames();
    this.getTips();
    this.findNextPrediction();
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => {
      this.teams = temp;
    });
  }

  getGames(): void {
    this.showSpinner = true;
    this.dataService
      .getGames("https://api.squiggle.com.au/?q=games;year=2019")
      .subscribe(temp => {
        this.games = temp.filter(
          (team: any) =>
            (team.complete == 100));
      })
      .add(() => (this.showSpinner = false));
  }

  getTips(): void {
    this.showSpinner = true;
    this.dataService.getTips().subscribe(temp => {
      this.tips = temp;
    })
    .add(() => (this.showSpinner = false));
  }

  findNextPrediction()
  {
    /*
    if(this.tips.find( temp => temp.correct === 0 ) && (this.tips.find(temp=> temp.ateam == "hawthorn") || this.tips.find(temp=>temp.hteam == "hawthorn")))
    {
      document.getElementById("favTeamLogo").innerHTML = "found";
    }
    else
    {
      document.getElementById("favTeamLogo").innerHTML = "not found";
    }
    */
  }
}