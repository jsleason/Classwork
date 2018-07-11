import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BucketDonatePage } from '../bucketdonate/bucketdonate';

@Component({
    selector: 'page-bucketing',
    templateUrl: 'bucketing.html'
})
export class BucketingPage {

    constructor(public navCtrl: NavController
    ) {
    }

    navigateToBucketDonate() {
        console.log("Navigating...");

        this.navCtrl.push(BucketDonatePage);
    }


}
