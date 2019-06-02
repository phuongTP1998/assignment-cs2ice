import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { DataService } from "../app/date-service.service";
import { HttpClientModule } from "@angular/common/http";

//Count down timer
import { CountdownTimerModule } from "ngx-countdown-timer";

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
import { RivalMatchesComponent } from "./rival-matches/rival-matches.component";
import { WinsLossesComponent } from "./wins-losses/wins-losses.component";

import { CarouselModule } from "ngx-bootstrap/carousel";
import { LoginFormComponent } from "./login-form/login-form.component";
import { AuthenticationService } from "./authentication-service.service";
import { CurrentMatchComponent } from "./current-match/current-match.component";
import { MemberAreaComponent } from './member-area/member-area.component';
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
    RivalMatchesComponent,
    WinsLossesComponent,
    LoginFormComponent,
    CurrentMatchComponent,
    MemberAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    FormsModule,
    CountdownTimerModule
  ],
  providers: [DataService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
