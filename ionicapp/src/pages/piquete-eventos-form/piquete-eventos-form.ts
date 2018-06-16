import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-piquete-eventos-form',
  templateUrl: 'piquete-eventos-form.html',
})
export class PiqueteEventosFormPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PiqueteEventosFormPage');
  }

}
