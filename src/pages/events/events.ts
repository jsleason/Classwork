import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventDetailsPage } from '../event details/eventdetails';
import { CheckinPage } from '../checkin/checkin';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { errorHandler } from '@angular/platform-browser/src/browser';

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

        // var VictorThon = new Event("VictorThon", "3/23/19", "24-hours", "Indoor Training Center", "In the capstone event of our year, hundreds of Dancers stand on their feet for 24 hours to show their dedication to our cause. VictorThon is hours of fun for students and families, with games, line dancing, and performances by students and kids! By staying awake and on our feet, we gain insight into the challenges and frustration that the children we support overcome every day.");

        // var PumpkinCarving = new Event("Pumpkin Carving", "10/27/18", "10 am - 3 pm", "Cube", "At this event, dancers learn all about DMUM and the cause they will be supporting throughout the year while meeting their team, DMUM families, and several of our therapists. Participants get to play fun games inspired by our therapies to learn about our cause firsthand. The event also offers many fall favorites such as eating doughnuts and cider, carving pumpkins, dressing up in Halloween costumes with DMUM kids, and more! The event is open to everyone, and is a great way for community members, potential families, and interested dancers to learn more about DMUM's incredible cause.");

        // var Gala = new Event("Gala", "12/1/18", "7pm - 10pm", "Michigan League", "The Gala is an annual event centered on fundraising for Dance Marathon’s cause. The event consists of a catered dinner and a silent auction, and we have family and student speakers that showcase the positive impact of our organization to the variety of guests who attend. The Gala is a great opportunity for community members to learn about and support our cause while having a fun night out!");

        // var FTKFormal = new Event("FTK Formal", "1/15/19", "6pm-9pm", "Michigan League", "This event is truly one-of-a-kind!  Kids, dancers, and external audiences alike love to go out to get dressed up, take pictures, go out to dinner, and dance to all their favorite music! There are also plenty of other activities if dancing isn't your thing-- it's truly a night for everyone!");

        // this.eventlist = [VictorThon, PumpkinCarving, Gala, FTKFormal];

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

    pull_event(event) {
        this.navCtrl.push(EventDetailsPage, {
            data: event
        });
    }

    navigateToCheckin() {
        console.log("Navigating...");

        this.navCtrl.push(CheckinPage);
    }
}