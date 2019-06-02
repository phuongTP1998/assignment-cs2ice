import { Component, OnInit } from '@angular/core';

import { DataService } from "../date-service.service";
import { Team } from "../Model/team";
import { Game } from "../Model/game";
import { Tip } from "../Model/tip";
import { forEach } from '@angular/router/src/utils/collection';

var stats = new Array(18);

@Component({
  selector: 'app-wins-losses',
  templateUrl: './wins-losses.component.html',
  styleUrls: ['./wins-losses.component.css']
})
export class WinsLossesComponent implements OnInit {
  constructor(private dataService: DataService) {}

  showSpinner: boolean;

  teams: Team[];
  games: Game[];
  tips: Tip[];

  ngOnInit() {
    this.getAFLTeams();
    this.getGames();
    this.getTips();
   this.createStats();
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
    this.dataService.getTips().subscribe(temp => {
      this.tips = temp;
    });
  }

  
  createStats(): void
  {
    /*
    //var s = this.games.toString();
    stats = this.games;
    document.getElementById("printResults").innerHTML = stats["teamid"];
     */
  }
 
}