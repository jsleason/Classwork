import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DonatePage } from '../donate/donate';

@Component({
    selector: 'page-bucketing',
    templateUrl: 'bucketing.html'
})
export class BucketingPage {

    constructor(public navCtrl: NavController) {
    }

    navigateToDonate() {
        console.log("Navigating...");
    
        this.navCtrl.push(DonatePage);
      }

}
