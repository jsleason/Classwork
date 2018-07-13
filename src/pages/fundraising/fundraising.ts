import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BucketingPage } from '../bucketing/bucketing';
import { HomePage } from '../home/home';


@Component({
    selector: 'page-fundraising',
    templateUrl: 'fundraising.html'
})
export class FundraisingPage {

    constructor(public navCtrl: NavController) {
    }

    navigateToBucketing() {
        console.log("Navigating...");

        this.navCtrl.push(BucketingPage);
    }

    navigateToHome(){
        console.log("Navigating...");
      
        this.navCtrl.push(HomePage);
      }

}
