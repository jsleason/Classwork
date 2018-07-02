import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { TherapiesPage } from '../therapies/therapies';
import { InvolvedDetailsPage } from '../involved details/involveddetails';

export class Involved {

    public type: string;
    public section1: string;
    public section2: string;

    constructor(name: string, one: string, two: string) {
        this.type = name;
        this.section1 = one;
        this.section2 = two;
    }

}

@Component({
    selector: 'page-involved',
    templateUrl: 'involved.html'
})
export class InvolvedPage {
    public involvedlist: Array<Involved>;

    constructor(public navCtrl: NavController) {
        var Students = new Involved("Students", "DMUM is a phenomenal way to meet new friends and connect with existing friends! Dancers are placed on teams that will be matched with our wonderful DMUM families. Dancers get the opportunity to participate in fun events, interact with kids and families, and volunteer at rehabilitation therapies while having fun! Students at UM can get involved in DMUM through a student org, with a group of friends, or as an individual as either a dancer or a dancer captain, or apply for dancer marathon leadership on steering.", "Please refer to the Registration page to join!");
        var Families = new Involved("Families", "As part of Dance Marathon at the University of Michigan's commitment to your entire family and unique needs, upon registration, you will be asked to choose a track. Both of these tracks, Maize and Victor, offer equal opportunities to experience all of the DMUM fun and only differ by your family’s hospital and/or medical association. Both tracks highlight and celebrate families and offer full access to family events, family newsletters, VictorThon, event performances, and the parent facebook group.", "Please refer to the Registration page or follow this link for family registration - https://dmum.donordrive.com/index.cfm?fuseaction=donorDrive.event&eventID=612");
        var Alumni = new Involved("Alumni", "Your commitment and involvement with DMUM does not end when you graduate; your DMUM family lasts a lifetime. It is because of all of your hard work and dedication that DMUM is what it is today: we couldn't have done it without you!", "We have a variety of regional alumni events and a new Alumni Dancer Experience to help you stay connected. Refer to the Registration Page for Alumni Dancer Registration and feel free to email dmum.alumnirelations@umich.edu with any questions or concerns you may have.");
        var CommunityPartners = new Involved("Community Partners", "We encourage and celebrate community involvement in our organization through our K-12 Engagement Program and by appreciating our generous sponsors.", "Please email dmum.k12engagement@umich.edu, dmum.cfr@umich.edu, or dmum.eventpartnership@umich.edu for more information.");

        this.involvedlist = [Students, Families, Alumni, CommunityPartners];
    }

    navigateToRegistration() {
        console.log("Navigating...");

        this.navCtrl.push(RegistrationPage);
    }

    navigateToTherapies() {
        console.log("Navigating...");

        this.navCtrl.push(TherapiesPage);
    }

    pull_involved(event) {
        this.navCtrl.push(InvolvedDetailsPage, {
            data: event
        });
    }
}
