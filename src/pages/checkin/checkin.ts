import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
    selector: 'page-checkin',
    templateUrl: 'checkin.html'
})
export class CheckinPage {

    constructor(public navCtrl: NavController) {

    }

    navigateToProfile() {
        console.log("Navigating...");
    
        this.navCtrl.push(ProfilePage);
      }

}
