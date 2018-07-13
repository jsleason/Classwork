import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  constructor(public navCtrl: NavController) {

  }

  navigateToHome(){
    console.log("Navigating...");
  
    this.navCtrl.push(HomePage);
  }

}