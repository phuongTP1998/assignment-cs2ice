import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { ParentComponent } from "./parent/parent.component";
import { welcomePageComponent } from "./welcomePage/welcomePage.component";
import { UpcomingGamesComponent } from "./upcoming-games/upcoming-games.component";
import { TeamResultsComponent } from "./team-results/team-results.component";
import { ResultsByVenueComponent } from "./results-by-venue/results-by-venue.component";
import { PredictionOfWinComponent } from "./prediction-of-win/prediction-of-win.component";
import { NextFiveGamesComponent } from "./next-five-games/next-five-games.component";

const routes: Routes = [
  { path: "parent", component: ParentComponent },
  { path: "welcome_page", component: welcomePageComponent },
  { path: "upcoming", component: UpcomingGamesComponent },
  { path: "team_results", component: TeamResultsComponent },
  { path: "results_by_venue", component: ResultsByVenueComponent },
  { path: "prediction", component: PredictionOfWinComponent },
  { path: "next_five_games", component: NextFiveGamesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
