import { Component, OnInit } from '@angular/core';
import { Team } from '../Team';

import { TeamService } from '../Team.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {

  selectedTeam: Team;

  teams : Object[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  	this.getTeams();
  }

  // onSelect(team: Team): void {
  //   this.selectedTeam = team;
  // }


  getTeams(): void {
    this.teamService.getTeams().subscribe(temp => this.teams = temp);
  }

}
