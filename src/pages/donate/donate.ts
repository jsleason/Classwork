import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProcessingPage } from '../processing/processing';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { errorHandler } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'page-donate',
  templateUrl: 'donate.html'
})
export class DonatePage {
 
  public eventlist: Array<Event>;
  public relationlist: Array<any>;

  constructor(public navCtrl: NavController, public http: Http) {

    this.http
    .get("http://localhost:3000/allEvents")
    .subscribe(
        result => {
            console.log(result.json());
            let data = result.json();
            this.eventlist = data;
        },
        err => {
            console.log(err);
        }
    );

    this.http
    .get("http://localhost:3000/allRelations")
    .subscribe(
        result => {
            console.log(result.json());
            let data = result.json();
            this.relationlist = data;
        },
        err => {
            console.log(err);
        }
    );

  }

  navigateToProcessing() {
    console.log("Navigating...");

    this.navCtrl.push(ProcessingPage);
  }

}