import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { RegistrationPage } from '../registration/registration';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
//import 'rxjs/add/operator/map';
//import { errorHandler } from '@angular/platform-browser/src/browser';

class Event{
      eventId: number;
      name: string;
      date_range: string;
      time_range: string;
      location: string;
      description: string;
}

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
    public event: Event;
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

    // navigateToProfile() {
    //     console.log("Navigating...");

    //     this.navCtrl.push(ProfilePage);
    // }

    navigateToRegistration() {
        console.log("Navigating...");

        this.navCtrl.push(RegistrationPage);
    }

    checkin() {
        // only allow checkin if an event has been selected
        // if so, call endpoint with specific event, navigate in the .subscribe
        this.http
            .get("http://localhost:3000/participantUniqname?uniqname=" + this.uniqname)
            .subscribe(
                result => {
                    let response = null;

                    try {
                        response = result.json();
                    } catch {
                        alert('uniqname not found!');
                    }

                    // if (response.status >= 400) {
                    //     alert('uniqname not found!')
                    //     return;
                    // }

                    console.log(result.json());
                    let data = result.json();
                    this.uniqname = data.uniqname;
                    

                    this.http
                    .post("http://localhost:3000/newCheckin", {
                        participantId: this.uniqname,
                        eventId: this.event.eventId,
                        
                    })
                    .subscribe(
                        result => {
                            console.log(result.json);
                            console.log(this.team);
                            console.log("Navigating...");
                            this.navCtrl.push(ProfilePage, {
                                eventdata: this.event.name,
                                teamdata: this.team,
                                namedata: this.name
                            });
                        },
                        err => {
                            console.log(err);
                        }
                    );
                },
                err => {
                    if (err.status >= 400) {
                        alert('uniqname not found!')
                        return;
                    }
                    console.log(err);
                }
            );

        // this.http
        //     .post("http://localhost:3000/newCheckin", {
        //         participantId: this.uniqname,
        //         eventId: this.event.eventId,
                
        //     })
        //     .subscribe(
        //         result => {
        //             console.log(result.json);
        //             console.log(this.team);
        //             console.log("Navigating...");
        //             this.navCtrl.push(ProfilePage, {
        //                 eventdata: this.event.name,
        //                 teamdata: this.team,
        //                 namedata: this.name
        //             });
        //         },
        //         err => {
        //             console.log(err);
        //         }
        //     );
    }


    navigateToHome(){
        console.log("Navigating...");
      
        this.navCtrl.push(HomePage);
      }

}
