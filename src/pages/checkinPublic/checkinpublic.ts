import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { RegistrationPage } from '../registration/registration';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { Ng4LoadingSpinnerService } from 'ngx-loading-spinner';
import { CheckinHomePage } from '../checkinHome/checkinhome';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    PCheckinForm: FormGroup;

    submitAttempt: boolean = false;
    
    public eventlist: Array<Event>;
    // public event: Event;  // selected event?
    public name: string;
    public event: Event;
    public eventId: number;
    public uniqname: string;

    posts: any;
    constructor(public navCtrl: NavController, public http: Http, private spinnerService: Ng4LoadingSpinnerService, public formBuilder: FormBuilder) {
        this.PCheckinForm = formBuilder.group({
            name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            event: ['', Validators.compose([Validators.required])],
            uniqname: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
        });

        this.http
            .get("http://localhost:3000/featuredEvents")
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

        this.spinnerService.show();

        this.http

            .post("http://localhost:3000/newPublicCheckin", {
                eventId: this.event.eventId,
                name: this.name,
                uniqname: this.uniqname
            })
            .subscribe(
                result => {
                    console.log("Navigating...");
                    this.navCtrl.push(ProfilePage, {
                        eventnamedata: this.event.name,
                        eventiddata: this.event.eventId,
                        namedata: this.name
                    });
                    this.spinnerService.hide()
                },
                err => {
                    this.submitAttempt = true;
                    this.spinnerService.hide()
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

    navigateToCheckinHome() {
        console.log("Navigating...");

        this.navCtrl.push(CheckinHomePage);
    }

}

