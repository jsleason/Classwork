import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { RegistrationPage } from '../registration/registration';
//import { SyncPage } from '../sync/sync';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';
//import { errorHandler } from '@angular/platform-browser/src/browser';


@Component({
    selector: 'page-checkin',
    templateUrl: 'checkin.html'
})
export class CheckinPage {
    public eventlist: Array<Event>;
   // public event: Event;  // selected event?
    public team: string;
    public name: string;
    public userid: any;

    posts: any;
    constructor(public navCtrl: NavController, public http: Http) {
        // gets events -> option list
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
    }

    navigateToProfile() {
        console.log("Navigating...");

        this.navCtrl.push(ProfilePage);
    }

    navigateToRegistration() {
        console.log("Navigating...");

        this.navCtrl.push(RegistrationPage);
    }


    // navigateToSync() {
    //     console.log("Navigating...");

    //     this.navCtrl.push(SyncPage);
    // }

    checkin() {
        // only allow checkin if an event has been selected
        // if so, call endpoint with specific event, navigate in the .subscribe
        this.http
            .post("http://localhost:3000/newCheckin", {
            })
            .subscribe(
                result => {
                    console.log(result.json);
                },
                err => {
                    console.log(err);
                }
            );
    }
}
