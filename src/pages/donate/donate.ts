import { Component, ViewChild, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProcessingPage } from '../processing/processing';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { errorHandler } from '@angular/platform-browser/src/browser';
<<<<<<< Updated upstream
=======
import { NgForm } from '@angular/forms';
>>>>>>> Stashed changes

@Component({
  selector: 'page-donate',
  templateUrl: 'donate.html'
})
<<<<<<< Updated upstream
export class DonatePage {
 
  public eventlist: Array<Event>;
  public relationlist: Array<any>;

  constructor(public navCtrl: NavController, public http: Http) {
=======
export class DonatePage implements AfterViewInit, OnDestroy {
 @ViewChild('cardInfo') cardInfo: ElementRef;

  public eventlist: Array<Event>;
  public relationlist: Array<any>;

  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;

  constructor(public navCtrl: NavController, public http: Http, private cd: ChangeDetectorRef) {
>>>>>>> Stashed changes

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
    .get("http://localhost:3000/allRelations")
    .subscribe(
        result => {
            console.log(result.json());
            let data = result.json();
            this.relationlist = data;
        },
        err => {
            console.log(err);
        }
    );

  }

  navigateToProcessing() {
    console.log("Navigating...");

    this.navCtrl.push(ProcessingPage);
  }

  ngAfterViewInit() {
      this.card = elements.create('card');
      this.card.mount(this.cardInfo.nativeElement);

      this.card.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({ error }) {
      if (error) {
          this.error = error.message;
      } else {
          this.error = null;
      }
      this.cd.detectChanges();
  }

  async onSubmit(form: NgForm) {
      const { token, error } = await stripe.createToken(this.card);

      if (error) {
          console.log('Something is wrong:', error);
      } else {
          console.log('Success!', token);
          //send the token to your backend to process the charge
      }
  }

}