import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CheckinPage } from '../checkin/checkin';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

class Profile {
  profileId: number;
  eventId: number;
  img_schedule: string;
  img_map: string;
  description: string;
  info1: string;
  info2: string;
  info3: string;
  info4: string;
  info5: string;
}

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public eventName: string;
  public name: string;
  public eventid: number;
  public profile: Profile = new Profile();

  public img_schedule: string;
  public img_map: string;
  public description: string;
  public info1: string;
  public info2: string;
  public info3: string;
  public info4: string;
  public info5: string;

  public shirt: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private alertCtrl: AlertController) {
    this.eventName = this.navParams.get("eventnamedata");
    this.name = this.navParams.get("namedata");
    this.eventid = this.navParams.get("eventiddata");
    this.shirt = this.navParams.get("shirtdata");
    console.log(this.shirt);

    this.http
      .get(`http://localhost:3000/eventProfileId?eventId=${this.eventid}`)
      .subscribe(
        result => {
          try {
            this.profile = result.json();
            this.img_schedule = this.profile.img_schedule;
            this.img_map = this.profile.img_map;
            this.description = this.profile.description;
            this.info1 = this.profile.info1;
            this.info2 = this.profile.info2;
            this.info3 = this.profile.info3;
            this.info4 = this.profile.info4;
            this.info5 = this.profile.info5;
            let alert = this.alertCtrl.create({
              title: 'Thank you!',
              message: 'Please look out for a checkin fee.',
              buttons: ['Dismiss']
            });
            alert.present();
          }

          catch (e) {
            let alert = this.alertCtrl.create({
              title: 'Thank you!',
              message: 'Please look out for a checkin fee.',
              buttons: ['Dismiss']
            });
            alert.present();
          }

        },
        err => {
          console.log(err);
        }
      );

  }

  navigateToCheckin() {
    console.log("Navigating...");

    this.navCtrl.push(CheckinPage);
  }

  navigateToHome() {
    console.log("Navigating...");

    this.navCtrl.push(HomePage);
  }

}