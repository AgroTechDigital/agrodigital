import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Animal, AnimalApi } from '../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-animal-form',
  templateUrl: 'animal-form.html',
})
export class AnimalFormPage {

  public dadosDoForm: Animal = new Animal();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public API: AnimalApi) {
    let item = navParams.get('item');
    if (item) this.dadosDoForm = Object.assign(new Animal, item);
  }

  ionViewDidLoad() {

  }

  salvar() {

    try {
      if (!this.dadosDoForm.tipo) throw 'Informe o tipo do animal';
      
      this.API.upsert(this.dadosDoForm).subscribe(
        (retorno: Animal) => {
          this.navCtrl.pop();
        }
      )

    } catch (error) {
      alert(error);
    }
  }

  excluir() {

  }

}
