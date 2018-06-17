import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AnimalEventos, Animal, AnimalEventosApi } from '../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-animal-eventos-form',
  templateUrl: 'animal-eventos-form.html',
})
export class AnimalEventosFormPage {

  public dadosDoForm: AnimalEventos = new AnimalEventos();
  public piquete: Animal = null;
  public callback: any = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public API: AnimalEventosApi,
    public viewCtrl: ViewController
  ) {
    let _item = navParams.get('item');
    if (_item) this.dadosDoForm = Object.assign(new AnimalEventos, _item);
    let _piquete = navParams.get('piquete');
    if (_piquete) this.piquete = Object.assign(new AnimalEventos, _piquete);
    let _callback = navParams.get('callback');
    if (_callback) this.callback = _callback;

    this.dadosDoForm.tipo = 'vacina';
  }

  salvar() {

    try {
      if (!this.dadosDoForm.nome) throw 'Informe uma nome do evento';
      if (!this.dadosDoForm.tipo) throw 'Informe o tipo de evento';

      if (this.piquete) {
        this.dadosDoForm.animalId = this.piquete.id;
      }

      this.API.upsert(this.dadosDoForm).subscribe(
        (data: AnimalEventos) => {
          if (this.callback) {
            this.callback().then(() => { this.viewCtrl.dismiss().catch(() => {}); });
          }
          this.navCtrl.pop();
        }
      )

    } catch (error) {
      alert(error);
    }
  }

  excluir() {
    if (confirm('deseja realmente excluir?')) {
      this.API.deleteById(this.dadosDoForm.id).subscribe(
        () => {
          if (this.callback) {
            this.callback().then(() => { this.viewCtrl.dismiss(); });
          }else{
            this.navCtrl.pop();
          }
        }
      );
    }
  }

  fechar(){
    this.navCtrl.pop();
  }

}
