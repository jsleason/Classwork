import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-involveddetails',
    templateUrl: 'involveddetails.html'
})
export class InvolvedDetailsPage {

    public title: string;
    public first: string;
    public second: string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        console.log(this.navParams.get("data"));
        this.title = this.navParams.get("data").type;
        this.first = this.navParams.get("data").section1;
        this.second = this.navParams.get("data").section2;
    }

    navigateToHome(){
        console.log("Navigating...");
      
        this.navCtrl.push(HomePage);
      }
}
