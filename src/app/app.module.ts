import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MemberListComponent } from './member-list/member-list.component';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { UpcomingMeetupsComponent } from './upcoming-meetups/upcoming-meetups.component';
import { MeetupDetailComponent } from './meetup-detail/meetup-detail.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MemberListComponent,
    MemberDetailComponent,
    AboutUsComponent,
    AdminComponent,
    EditMemberComponent,
    UpcomingMeetupsComponent,
    MeetupDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
