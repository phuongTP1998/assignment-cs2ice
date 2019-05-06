import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import { Team } from './Team'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class TeamService {
  private teamsURL = "https://api.squiggle.com.au/?q=teams";
  constructor(
    private http: HttpClient
  ) {}

 teams = [new Team(346, "Leicester City", "Foxes", "http://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png"), new Team(394, "Crystal Palace","Crystal", "http://upload.wikimedia.org/wikipedia/de/b/bf/Crystal_Palace_F.C._logo_(2013).png")];


  getTeams(): Observable<object> {
    return this.http.get(this.teamsURL);
  }
}