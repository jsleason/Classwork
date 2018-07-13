import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-therapies',
  templateUrl: 'therapies.html'
})
export class TherapiesPage {

  constructor(public navCtrl: NavController) {

  }

  navigateToHome(){
    console.log("Navigating...");
  
    this.navCtrl.push(HomePage);
  }

}