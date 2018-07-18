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
    this.team = this.navParams.get("teamdata");
    this.event = this.navParams.get("eventdata");
    this.name = this.navParams.get("namedata");
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