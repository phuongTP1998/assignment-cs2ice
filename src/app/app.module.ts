import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { DataService } from "../app/date-service.service";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { topBannerNavComponent } from "./topBannerNav/topBannerNav.component";
import { welcomePageComponent } from "./welcomePage/welcomePage.component";
import { teamNavComponent } from "./teamNav/teamNav.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { UpcomingGamesComponent } from "./upcoming-games/upcoming-games.component";
import { TeamResultsComponent } from "./team-results/team-results.component";
import { ResultsByVenueComponent } from "./results-by-venue/results-by-venue.component";
import { PredictionOfWinComponent } from "./prediction-of-win/prediction-of-win.component";
import { NextFiveGamesComponent } from "./next-five-games/next-five-games.component";
import { LoginScreenComponent } from "./login-screen/login-screen.component";
import { RivalMatchesComponent } from "./rival-matches/rival-matches.component";
import { WinsLossesComponent } from "./wins-losses/wins-losses.component";

import { CarouselModule } from "ngx-bootstrap/carousel";

@NgModule({
  declarations: [
    AppComponent,
    topBannerNavComponent,
    welcomePageComponent,
    teamNavComponent,
    CarouselComponent,
    UpcomingGamesComponent,
    TeamResultsComponent,
    ResultsByVenueComponent,
    PredictionOfWinComponent,
    NextFiveGamesComponent,
    LoginScreenComponent,
    RivalMatchesComponent,
    WinsLossesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
