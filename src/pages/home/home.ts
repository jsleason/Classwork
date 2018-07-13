import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib/index';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { errorHandler } from '@angular/platform-browser/src/browser';

import { CheckinPage } from '../checkin/checkin';
import { InvolvedPage } from '../involved/involved';
import { AboutPage } from '../about/about';
import { EventsPage } from '../events/events';
import { DonatePage } from '../donate/donate';
import { FamiliesPage } from '../families/families';
import { FundraisingPage } from '../fundraising/fundraising';
import { BucketingPage } from '../bucketing/bucketing';
import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   
    public registrationPromos: Array<any>;
    public sponsorPromos: Array<any>;


  constructor(
    public navCtrl: NavController, 
    private ng4TwitterTimelineService: Ng4TwitterTimelineService,
    public http: Http) {

      this.http
        .get("http://localhost:3000/allRegistrationPromos")
        .subscribe(
            result => {
                console.log(result.json());
                let data = result.json();
                this.registrationPromos = data;
            },
            err => {
                console.log(err);
            }
        );

        this.http
        .get("http://localhost:3000/allSponsorPromos")
        .subscribe(
            result => {
                console.log(result.json());
                let data = result.json();
                this.sponsorPromos = data;
            },
            err => {
                console.log(err);
            }
        );

  }

  navigateToInvolved() {
    console.log("Navigating...");

    this.navCtrl.push(InvolvedPage);
  }

  navigateToAbout() {
    console.log("Navigating...");

    this.navCtrl.push(AboutPage);
  }

  navigateToEvents() {
    console.log("Navigating to events...");

    this.navCtrl.push(EventsPage);
  }

  navigateToDonate() {
    console.log("Navigating...");

    this.navCtrl.push(DonatePage);
  }

  navigateToFamilies() {
    console.log("Navigating...");

    this.navCtrl.push(FamiliesPage);
  }

  navigateToFundraising() {
    console.log("Navigating...");

    this.navCtrl.push(FundraisingPage);
  }

  navigateToCheckin() {
    console.log("Navigating...");

    this.navCtrl.push(CheckinPage);
  }

  navigateToBucketing() {
    console.log("Navigating...");

    this.navCtrl.push(BucketingPage);
}

navigateToRegistration() {
  console.log("Navigating...");

  this.navCtrl.push(RegistrationPage);
}

navigateToHome(){
  console.log("Navigating...");

  this.navCtrl.push(HomePage);
}
  
}