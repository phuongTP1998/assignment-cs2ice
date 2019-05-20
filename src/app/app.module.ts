import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { topBannerNavComponent } from "./topBannerNav/topBannerNav.component";
import { welcomePageComponent } from "./welcomePage/welcomePage.component";
import { teamNavComponent } from "./teamNav/teamNav.component";

import { TeamService } from "./team.service";
import { HttpClientModule } from "@angular/common/http";

import { RouterModule, Routes } from "@angular/router";
import { PredictionOfWinComponent } from "./prediction-of-win/prediction-of-win.component";
import { TeamResultsComponent } from "./team-results/team-results.component";
import { NextFiveGamesComponent } from "./next-five-games/next-five-games.component";
import { RivalMatchesComponent } from "./rival-matches/rival-matches.component";
import { ResultsByVenueComponent } from "./results-by-venue/results-by-venue.component";
import { UpcomingGamesComponent } from "./upcoming-games/upcoming-games.component";
import { CarouselComponent } from "./carousel/carousel.component";

import { CarouselModule } from "ngx-bootstrap/carousel";
import { LoginScreenComponent } from "./login-screen/login-screen.component";

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    topBannerNavComponent,
    welcomePageComponent,
    teamNavComponent,
    PredictionOfWinComponent,
    TeamResultsComponent,
    NextFiveGamesComponent,
    RivalMatchesComponent,
    ResultsByVenueComponent,
    UpcomingGamesComponent,
    CarouselComponent,
    LoginScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule.forRoot()
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule {}
