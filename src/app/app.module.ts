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

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    topBannerNavComponent,
    welcomePageComponent,
    teamNavComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule {}
