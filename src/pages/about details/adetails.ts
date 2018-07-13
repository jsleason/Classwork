import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-adetails',
    templateUrl: 'adetails.html'
})
export class AboutDetailsPage {

    public title: string;
    public description: string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        console.log(this.navParams.get("data"));
        this.title = this.navParams.get("data").section;
        this.description = this.navParams.get("data").description;
    }

    navigateToHome(){
        console.log("Navigating...");
      
        this.navCtrl.push(HomePage);
      }
}

