import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib/index';

import { CheckinPage } from '../checkin/checkin';
import { InvolvedPage } from '../involved/involved';
import { AboutPage } from '../about/about';
import { EventsPage } from '../events/events';
import { DonatePage } from '../donate/donate';
import { FamiliesPage } from '../families/families';
import { FundraisingPage } from '../fundraising/fundraising';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private ng4TwitterTimelineService: Ng4TwitterTimelineService) {

  }

  navigateToCheckin() {
    console.log("Navigating...");

    this.navCtrl.push(CheckinPage);
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
}