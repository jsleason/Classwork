import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CheckinPage } from '../pages/checkin/checkin';
import { RegistrationPage } from '../pages/registration/registration';
import { ProfilePage } from '../pages/profile/profile';
import { AboutPage } from '../pages/about/about';
import { TherapiesPage } from '../pages/therapies/therapies';
import { EventsPage } from '../pages/events/events';
import { EventDetailsPage } from '../pages/event details/eventdetails';
import { DonatePage } from '../pages/donate/donate';
import { ProcessingPage } from '../pages/processing/processing';
import { InvolvedPage } from '../pages/involved/involved';
import { AboutDetailsPage } from '../pages/about details/adetails';
import { InvolvedDetailsPage } from '../pages/involved details/involveddetails';
import { FamiliesPage } from '../pages/families/families';
import { FundraisingPage } from '../pages/fundraising/fundraising';
import { BucketingPage } from '../pages/bucketing/bucketing';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CheckinPage,
    RegistrationPage,
    ProfilePage,
    AboutPage,
    TherapiesPage,
    EventsPage,
    EventDetailsPage,
    DonatePage,
    ProcessingPage,
    InvolvedPage,
    AboutDetailsPage,
    InvolvedDetailsPage,
    FamiliesPage,
    FundraisingPage,
    BucketingPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ng4TwitterTimelineModule,
    HttpModule
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CheckinPage,
    RegistrationPage,
    ProfilePage,
    AboutPage,
    TherapiesPage,
    EventsPage,
    EventDetailsPage,
    DonatePage,
    ProcessingPage,
    InvolvedPage,
    AboutDetailsPage,
    InvolvedDetailsPage,
    FamiliesPage,
    FundraisingPage,
    BucketingPage
      ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }