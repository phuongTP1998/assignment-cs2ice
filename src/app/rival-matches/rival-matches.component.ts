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
  teams: Team[];
  showSpinner: boolean;
  teamSearch: boolean;
  searchfield: string;

  ngOnInit() {
    this.getAFLTeams();
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => {
      this.teams = temp;
      this.teamSearch = true;
    });
  }

  getGames(teamName: string): void {
    this.teamSearch = false;
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
    this.showSpinner = true;
    event.preventDefault();
    const target = event.target;
    const teamName = target.querySelector("#search").value;
    this.getGames(teamName);
  }

  liveSearch() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    console.log(filter);
    table = document.querySelector("#teamTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}
