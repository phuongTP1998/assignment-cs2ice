import { Component, OnInit } from "@angular/core";

import { DataService } from "../date-service.service";
import { Rank } from "../Model/rank";
import { forEach } from "@angular/router/src/utils/collection";

var stats = new Array(18);

@Component({
  selector: "app-wins-losses",
  templateUrl: "./wins-losses.component.html",
  styleUrls: ["./wins-losses.component.css"]
})
export class WinsLossesComponent implements OnInit {
  constructor(private dataService: DataService) {}

  showSpinner: boolean;

  ladders: Rank[];
  i: number;

  ngOnInit() {
    this.i = 0;
    this.getLadder();
  }

  getLadder() {
    this.dataService.getRank().subscribe(temp => {
      this.ladders = temp;
    });
  }
}
