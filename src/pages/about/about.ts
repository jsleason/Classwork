import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { AboutDetailsPage } from '../about details/adetails';

export class About {

  public section: string;
  public description: string;

  constructor(name: string, what: string) {
    this.section = name;
    this.description = what;
  }

}

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public aboutlist: Array<About>;

  constructor(public navCtrl: NavController) {
    var Mission = new About("Mission", "Dance Marathon at the University of Michigan (DMUM) supports children with disabilities and illnesses by raising funds and generating awareness for pediatric rehabilitation therapies at C.S. Mott Children’s Hospital and Beaumont Children’s.");
    var Vision = new About("Vision", "Unite our campus and community behind creating a world where all kids can be kids.");
    var Values = new About("Values", "Compassion, Integrity, Commitment, Inclusivity, Growth");
    var Beneficiaries = new About("Beneficiaries", "CS.Mott and Beaumont Children's Hospitals");
    var History = new About("History", "In 1997, Dance Marathon made its way to the University of Michigan. Inder Singh, DMUM’s founder, had heard of the positive impacts that Dance Marathons across the country were making on both the kids and families they support, as well as the students that stand. Consequently, he brought Dance Marathon to Ann Arbor. With help from the Children’s Miracle Network, 24 students on the first Central Planning Team set out to organize U of M’s first Marathon during the 1997-1998 school year. In the spring of 1998, Michigan’s first Dance Marathon came to fruition. Hundreds of dancers stood, and the organization raised $35,000 for pediatric rehabilitation therapies at Beaumont Children's in Royal Oak, MI. Today we have expanded to support both the University of Michigan’s C.S. Mott Children’s Hospital as well as Beaumont Children's in Royal Oak.");
    var ContactUs = new About("Contact Us", "Email dmum.info@umich.edu with your questions!");

    this.aboutlist = [Mission, Vision, Values, Beneficiaries, History, ContactUs];

  }

  pull_about(event) {
    // this.navCtrl.push(AboutDetailsPage, {
    //   data: event
    // });
  }

}