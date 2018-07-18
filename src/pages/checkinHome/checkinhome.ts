import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { CheckinPage } from '../checkin/checkin';
import { CheckinPublicPage } from '../checkinPublic/checkinpublic';
//import 'rxjs/add/operator/map';
//import { errorHandler } from '@angular/platform-browser/src/browser';


@Component({
    selector: 'page-checkinhome',
    templateUrl: 'checkinhome.html'
})
export class CheckinHomePage {

    posts: any;
    constructor(public navCtrl: NavController, public http: Http) {
    }

    navigateToCheckin() {
        console.log("Navigating...");

        this.navCtrl.push(CheckinPage);
    }

    navigateToPublic() {
        console.log("Navigating...");

        this.navCtrl.push(CheckinPublicPage);
    }

    navigateToHome(){
        console.log("Navigating...");
      
        this.navCtrl.push(HomePage);
      }


}
