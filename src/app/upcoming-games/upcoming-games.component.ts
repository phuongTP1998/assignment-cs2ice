import { Component, OnInit } from "@angular/core";
import { DataService } from "../date-service.service";
import { Game } from "../Model/game";

@Component({
  selector: "app-upcoming-games",
  templateUrl: "./upcoming-games.component.html",
  styleUrls: ["./upcoming-games.component.css"]
})
export class UpcomingGamesComponent implements OnInit {
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
  // not work
  // sortById(games: Game[]) {
  //   games.sort((gameA: Game, gameB: Game) => {
  //     if (gameA.id > gameB.id) {
  //       return 1;
  //     }
  //     if (gameA.id < gameB.id) {
  //       return 0;
  //     }
  //     return 0;
  //   });
  // }
}
