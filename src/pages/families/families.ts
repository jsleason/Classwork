import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-families',
    templateUrl: 'families.html'
})
export class FamiliesPage {
    constructor(public navCtrl: NavController) {
    }

    navigateToHome(){
        console.log("Navigating...");
      
        this.navCtrl.push(HomePage);
      }

}