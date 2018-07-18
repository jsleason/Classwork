import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { RegistrationPage } from '../registration/registration';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
//import 'rxjs/add/operator/map';
//import { errorHandler } from '@angular/platform-browser/src/browser';

class Event {
    eventId: number;
    name: string;
    date_range: string;
    time_range: string;
    location: string;
    description: string;
}


@Component({
    selector: 'page-checkinpublic',
    templateUrl: 'checkinpublic.html'
})
export class CheckinPublicPage {
    public eventlist: Array<Event>;
    // public event: Event;  // selected event?
    public name: string;
    public event: Event;
    public eventId: number;
    public uniqname: string;

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

    // navigateToProfile() {
    //     console.log("Navigating...");

    //     this.navCtrl.push(ProfilePage);
    // }

    navigateToRegistration() {
        console.log("Navigating...");

        this.navCtrl.push(RegistrationPage);
    }

    publicCheckin() {
        // only allow checkin if an event has been selected
        // if so, call endpoint with specific event, navigate in the .subscribe
        this.http

            .post("http://localhost:3000/newPublicCheckin", {
                eventId: this.event.eventId,
                name: this.name,
                uniqname: this.uniqname
            })
            .subscribe(
                result => {
                    console.log(result.json);
                    console.log("Navigating...");
                    this.navCtrl.push(ProfilePage, {
                        eventdata: this.event.name,
                        namedata: this.name
                    });
                },
                err => {
                    console.log(err);
                }

            );
    }

    // pull_event(item) {
    //     this.navCtrl.push(ProfilePage, {
    //         eventdata: item
    //     });
    // }

    navigateToHome() {
        console.log("Navigating...");

        this.navCtrl.push(HomePage);
    }

}

