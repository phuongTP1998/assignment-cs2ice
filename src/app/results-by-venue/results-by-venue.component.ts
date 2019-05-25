import { Component, OnInit } from "@angular/core";
import { DataService } from "../date-service.service";
import { Game } from "../Model/game";

@Component({
  selector: "app-results-by-venue",
  templateUrl: "./results-by-venue.component.html",
  styleUrls: ["./results-by-venue.component.css"]
})
export class ResultsByVenueComponent implements OnInit {
  constructor(private dataService: DataService) {}

  showSpinner: boolean;

  games: Game[];

  ngOnInit() {}

  getGames(venue: string): void {
    this.dataService
      .getGames("https://api.squiggle.com.au/?q=games;year=2019;")
      .subscribe(temp => {
        this.games = temp.filter((match: any) => match.venue == venue);
      })
      .add(() => (this.showSpinner = false));
  }

  searchVenue(event) {
    console.log("fired");
    this.showSpinner = true;
    event.preventDefault();
    const target = event.target;
    const venue = target.querySelector("#search").value;

    this.getGames(venue);
  }
}
