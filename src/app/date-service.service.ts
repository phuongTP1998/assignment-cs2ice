import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, filter, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Team } from "./Model/team";
import { Game } from "./Model/game";
import { Tip } from "./Model/tip";
import { BehaviorSubject } from "rxjs";

import { analyzeAndValidateNgModules, isNgTemplate } from "@angular/compiler";
import { Rank } from "./Model/rank";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private isLoggin: boolean = false;

  constructor(private http: HttpClient) {}

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<
    boolean
  >(false);

  getTeams(): Observable<Team[]> {
    return this.http
      .get("https://api.squiggle.com.au/?q=teams")
      .pipe(
        map((data: any) =>
          data.teams.map(
            (item: any) => new Team(item.logo, item.id, item.name, item.abbrev)
          )
        )
      );
  }

  getTips(): Observable<Tip[]> {
    return this.http
      .get("https://api.squiggle.com.au/?q=tips;year=2019;complete=0;")
      .pipe(
        map((data: any) =>
          data.tips.map(
            (item: any) =>
              new Tip(
                item.confidence,
                item.bits,
                item.gameid,
                item.ateamid,
                item.venue,
                item.year,
                item.correct,
                item.date,
                item.updated,
                item.hteam,
                item.tipteamid,
                item.margin,
                item.err,
                item.tip,
                item.ateam,
                item.source,
                item.sourceid,
                item.hconfidence,
                item.hteamid,
                item.round
              )
          )
        )
      );
  }

  getRank(): Observable<Rank[]> {
    return this.http
      .get("https://api.squiggle.com.au/?q=ladder")
      .pipe(
        map((data: any) =>
          data.ladder.map(
            (item: any) =>
              new Rank(
                item.year,
                item.team,
                item.round,
                item.rank,
                item.teamid,
                item.updated,
                item.wins
              )
          )
        )
      );
  }

  getGames(getGameUrl: string): Observable<Game[]> {
    return this.http
      .get(getGameUrl)
      .pipe(
        map((data: any) =>
          data.games.map(
            (item: any) =>
              new Game(
                item.complete,
                item.is_grand_final,
                item.tz,
                item.hbehinds,
                item.ateam,
                item.winnerteamid,
                item.hgoals,
                item.updated,
                item.round,
                item.is_final,
                item.hscore,
                item.abehinds,
                item.winner,
                item.ascore,
                item.hteam,
                item.ateamid,
                item.venue,
                item.hteamid,
                item.agoals,
                item.year,
                item.date,
                item.id
              )
          )
        )
      );
  }
}
