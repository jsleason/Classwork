import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProcessingPage } from '../processing/processing';

@Component({
  selector: 'page-donate',
  templateUrl: 'donate.html'
})
export class DonatePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToProcessing() {
    console.log("Navigating...");

    this.navCtrl.push(ProcessingPage);
  }

}