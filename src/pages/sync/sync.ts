import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CheckinPage } from '../checkin/checkin';
import { RegistrationPage } from '../registration/registration';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-sync',
    templateUrl: 'sync.html'
})
export class SyncPage {

    constructor(public navCtrl: NavController) {

    }

    navigateToRegistration() {
        console.log("Navigating...");
    
        this.navCtrl.push(RegistrationPage);
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
