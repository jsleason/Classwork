import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-bucketing',
    templateUrl: 'bucketing.html'
})
export class BucketingPage {

    constructor(public navCtrl: NavController
    ) {
    }

    navigateToHome(){
        console.log("Navigating...");
      
        this.navCtrl.push(HomePage);
      }

}