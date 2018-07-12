import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProcessingPage } from '../processing/processing';

@Component({
  selector: 'page-bucketdonate',
  templateUrl: 'bucketdonate.html'
})
export class BucketDonatePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToProcessing() {
    console.log("Navigating...");

    this.navCtrl.push(ProcessingPage);
  }

}