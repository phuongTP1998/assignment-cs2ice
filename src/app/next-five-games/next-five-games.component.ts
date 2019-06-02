import { Component, OnInit } from "@angular/core";
import { DataService } from "../date-service.service";
import { Team } from "../Model/team";
import { Game } from "../Model/game";

@Component({
  selector: "app-next-five-games",
  templateUrl: "./next-five-games.component.html",
  styleUrls: ["./next-five-games.component.css"]
})
export class NextFiveGamesComponent implements OnInit {
  showSpinner: boolean;

  teams: Team[];
  games: Game[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getAFLTeams();
    this.getGames();
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => {
      this.teams = temp;
    });
  }

  getGames(): void {
    this.showSpinner = true;
    this.dataService
      .getGames("https://api.squiggle.com.au/?q=games&year=2019&complete=0")
      .subscribe(temp => {
        this.games = temp.filter(
          (team: any) => team.ateam == "Hawthorn" || team.hteam == "Hawthorn"
        );
      })
      .add(() => (this.showSpinner = false))
      .add(this.sortById(this.games));
  }

  sortById(games: Game[]) {
    games.sort((gameA: Game, gameB: Game) => {
      if (gameA.id > gameB.id) {
        return 1;
      }
      if (gameA.id < gameB.id) {
        return 0;
      }
      return 0;
    });
  }
}
