import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CheckinPage } from '../checkin/checkin';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public team: string;
  public event: string;
  public name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.get("teamdata")) {
      this.team = this.navParams.get("teamdata").name;
    }

    if (this.navParams.get("eventdata")) {
      this.event = this.navParams.get("eventdata").name;
    }
  }

  navigateToCheckin() {
    console.log("Navigating...");

    this.navCtrl.push(CheckinPage);
  }

  navigateToHome(){
    console.log("Navigating...");
  
    this.navCtrl.push(HomePage);
  }

}