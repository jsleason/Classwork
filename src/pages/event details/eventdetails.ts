import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-eventdetails',
    templateUrl: 'eventdetails.html'
})
export class EventDetailsPage {

    public title: string;
    public date: any;
    public time: any;
    public location: string;
    public description: string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        console.log(this.navParams.get("data"));
        this.title = this.navParams.get("data").name;
        this.date = this.navParams.get("data").date;
        this.time = this.navParams.get("data").time;
        this.location = this.navParams.get("data").location;
        this.description = this.navParams.get("data").description;
     }
 }

