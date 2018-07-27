import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { RegistrationPage } from '../registration/registration';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ngx-loading-spinner';

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
    selector: 'page-checkin',
    templateUrl: 'checkin.html'
})
export class CheckinPage {
    public loading = false;
    public eventlist: Array<Event>;
    public teamlist: Array<any>;
    // public event: Event;  // selected event?
    public team: string;
    public name: string;
    public event: Event;
    public eventId: number;
    public uniqname: any;

    posts: any;
    constructor(public navCtrl: NavController, public http: Http, private alertCtrl: AlertController,  private spinnerService: Ng4LoadingSpinnerService) {
        // gets events -> option list
        this.http
            .get("http://localhost:3000/activeEvents")
            .subscribe(
                result => {
                    this.eventlist = result.json();;
                },
                err => {
                    console.log(err);
                }
            );

        this.http
            .get("http://localhost:3000/allTeams")
            .subscribe(
                result => {
                    this.teamlist = result.json();
                },
                err => {
                    console.log(err);
                }
            );
    }

    navigateToRegistration() {
        console.log("Navigating...");

        this.navCtrl.push(RegistrationPage);
    }

    checkin() {
        // only allow checkin if an event has been selected
        // if so, call endpoint with specific event, navigate in the .subscribe
        this.spinnerService.show();
        this.http
            .get("http://localhost:3000/participantUniqname?uniqname=" + this.uniqname)
            .subscribe(
                result => {
                    let response = null;

                    try {
                        response = result.json();

                        if (response.success == false) {
                            throw new Error();
                        }
                    } catch (e) {
                        this.spinnerService.hide();
                        let alert = this.alertCtrl.create({
                            title: 'Your uniqname was not found',
                            message: 'Please check the spelling of your uniqname. If your uniqname is spelled coorectly, it is possible that you are not registered. Non registered participants need to register or use the public checkin.',
                            buttons: ['Dismiss']
                        });
                        alert.present();
                    }
                    let data = result.json();
                    this.uniqname = data.uniqname;


                    this.http
                        .post("http://localhost:3000/newCheckin", {
                            participantId: this.uniqname,
                            eventId: this.event.eventId,

                        })
                        .subscribe(
                            result => {
                                console.log("Navigating...");
                                this.navCtrl.push(ProfilePage, {
                                    eventnamedata: this.event.name,
                                    eventiddata: this.event.eventId,
                                    namedata: this.name
                                });
                                this.spinnerService.hide();
                            },
                            err => {
                                console.log(err);
                            }
                        );
                },
                err => {
                    this.spinnerService.hide();
                    console.log(err);
                }
            );
    }


    navigateToHome() {
        console.log("Navigating...");

        this.navCtrl.push(HomePage);
    }

}
