import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { RegistrationPage } from '../registration/registration';
//import { SyncPage } from '../sync/sync';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
//import 'rxjs/add/operator/map';
//import { errorHandler } from '@angular/platform-browser/src/browser';


@Component({
    selector: 'page-checkin',
    templateUrl: 'checkin.html'
})
export class CheckinPage {
    public eventlist: Array<Event>;
    public teamlist: Array<any>;
    // public event: Event;  // selected event?
    public team: string;
    public name: string;
    public event: string;
    public eventId: number;
    public uniqname: any;

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

        this.http
            .get("http://localhost:3000/allTeams")
            .subscribe(
                result => {
                    console.log(result.json());
                    let data = result.json();
                    this.teamlist = data;
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
            .get("http://localhost:3000//participantUniqname")
            .subscribe(
                result => {
                    console.log(result.json());
                    let data = result.json();
                    this.uniqname = data.uniqname;
                },
                err => {
                    console.log(err);
                }
            );

        this.http
            .post("http://localhost:3000/newPublicCheckin", {
                participantId: this.uniqname,
                eventId: this.eventId,
                
            })
            .subscribe(
                result => {
                    console.log(result.json);
                },
                err => {
                    console.log(err);
                }
            );

            this.navCtrl.push(ProfilePage, {
                namedata: name
            });
    }

    pull_event(item) {
        this.navCtrl.push(ProfilePage, {
            eventdata: item
        });
    }

    pull_team(item) {
        this.navCtrl.push(ProfilePage, {
            teamdata: item
        });
    }

    navigateToHome(){
        console.log("Navigating...");
      
        this.navCtrl.push(HomePage);
      }

}
