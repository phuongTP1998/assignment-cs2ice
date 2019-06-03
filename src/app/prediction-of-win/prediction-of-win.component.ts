import { Component, OnInit } from "@angular/core";

import { DataService } from "../date-service.service";
import { Tip } from "../Model/tip";

@Component({
  selector: "app-prediction-of-win",
  templateUrl: "./prediction-of-win.component.html",
  styleUrls: ["./prediction-of-win.component.css"]
})
export class PredictionOfWinComponent implements OnInit {
  constructor(private dataService: DataService) {}

  showSpinner: boolean;

  tips: Tip[];

  ngOnInit() {
    this.getTips();
  }

  getTips(): void {
    this.showSpinner = true;
    this.dataService
      .getTips()
      .subscribe(temp => {
        this.tips = temp;
      })
      .add(() => (this.showSpinner = false));
  }

  findNextPrediction() {
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
