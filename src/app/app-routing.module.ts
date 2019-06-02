import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";


import { UpcomingGamesComponent } from "./upcoming-games/upcoming-games.component";
import { TeamResultsComponent } from "./team-results/team-results.component";
import { ResultsByVenueComponent } from "./results-by-venue/results-by-venue.component";
import { PredictionOfWinComponent } from "./prediction-of-win/prediction-of-win.component";
import { NextFiveGamesComponent } from "./next-five-games/next-five-games.component";
import { RivalMatchesComponent } from './rival-matches/rival-matches.component';
import { WinsLossesComponent } from './wins-losses/wins-losses.component';
import { MemberAreaComponent } from './member-area/member-area.component'

const routes: Routes = [
  { path: "upcoming", component: UpcomingGamesComponent },
  { path: "team_results", component: TeamResultsComponent },
  { path: "results_by_venue", component: ResultsByVenueComponent },
  { path: "prediction", component: PredictionOfWinComponent },
  { path: "next_five_games", component: NextFiveGamesComponent },
  { path: "rivals", component: RivalMatchesComponent },
  { path: "wins_losses", component: WinsLossesComponent },
  { path: '', component: MemberAreaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
