import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventDetailsPage } from '../event details/eventdetails';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';
import { CheckinHomePage } from '../checkinHome/checkinhome';

export class Event {

    public name: string;
    public date: any;
    public time: any;
    public location: string;
    public description: string;

    constructor(event_name: string, day: any, when: any, where: string, what: string) {
        this.name = event_name;
        this.date = day;
        this.time = when;
        this.location = where;
        this.description = what;
    }

}

@Component({
    selector: 'page-events',
    templateUrl: 'events.html'
})
export class EventsPage {
    public eventlist: Array<Event>;
    public name: string;

    constructor(public navCtrl: NavController, private http: Http) {

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

    pull_event(event) {
        this.navCtrl.push(EventDetailsPage, {
            data: event
        });
    }

    navigateToCheckin() {
        console.log("Navigating...");

        this.navCtrl.push(CheckinHomePage);
    }

    navigateToHome(){
        console.log("Navigating...");
      
        this.navCtrl.push(HomePage);
      }
}