import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ModalController, NavParams } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { DonatePage } from '../pages/donate/donate';

import { CheckinPage } from '../pages/checkin/checkin';
import { InvolvedPage } from '../pages/involved/involved';
import { AboutPage } from '../pages/about/about';
import { EventsPage } from '../pages/events/events';
import { FamiliesPage } from '../pages/families/families';
import { FundraisingPage } from '../pages/fundraising/fundraising';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage: any = HomePage;

  @ViewChild(Nav) navCtrl;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
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
  }

  navigateToFamilies() {
    console.log("Navigating...");

    this.navCtrl.push(FamiliesPage);
  }

  navigateToFundraising() {
    console.log("Navigating...");

    this.navCtrl.push(FundraisingPage);
  }

  presentDonateModal() {
    let donateModal = this.modalCtrl.create(DonatePage);
    donateModal.present();
  }

  navigateToFamilies() {
    console.log("Navigating...");

    this.navCtrl.push(FamiliesPage);
  }

  navigateToFundraising() {
    console.log("Navigating...");

    this.navCtrl.push(FundraisingPage);
  }

  presentDonateModal() {
    let donateModal = this.modalCtrl.create(DonatePage);
    donateModal.present();
  }

}

