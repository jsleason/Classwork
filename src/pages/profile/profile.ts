import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CheckinPage } from '../checkin/checkin';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToCheckin() {
    console.log("Navigating...");

    this.navCtrl.push(CheckinPage);
  }

}