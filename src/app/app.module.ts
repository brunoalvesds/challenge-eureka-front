import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersPage } from './pages/members/members.component';
import { GlobalNavigationComponent } from './shared-components/global-navigation/global-navigation.component';
import { CardMembersRankingComponent } from './shared-components/card-members-ranking/card-members-ranking.component';
import { CardMemberInfoComponent } from './shared-components/card-member-info/card-member-info.component';
import { CardActivityFeedComponent } from './shared-components/card-activity-feed/card-activity-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersPage,
    GlobalNavigationComponent,
    CardMembersRankingComponent,
    CardMemberInfoComponent,
    CardActivityFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
