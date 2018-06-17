import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnimalEventos, AnimalRFIDApi, AnimalRFID, AnimalApi, Animal, AnimalEventosApi } from '../../app/shared/sdk';

/**
 * Generated class for the AnimalEventoLoteFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animal-evento-lote-form',
  templateUrl: 'animal-evento-lote-form.html',
})
export class AnimalEventoLoteFormPage {

  public dadosDoForm: AnimalEventos = new AnimalEventos();
  public tagManual: AnimalRFID = new AnimalRFID();
  public lista: AnimalRFID[] = [];
  public timeoutGeral: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public rfidApi: AnimalRFIDApi,
    public animalApi: AnimalApi,
    public eventoApi: AnimalEventosApi,
  ) {
    this.dadosDoForm.tipo = "vacinacao";
    this.dadosDoForm.data = new Date();
    this.leitura();
  }

  leitura() {
    this.rfidApi.leitura().subscribe((data: AnimalRFID[]) => {
      console.log(data)
      data.forEach(i => {
        this.lista.push(i)
      });
      this.timeoutGeral = setTimeout(() => {
        this.leitura();
      }, 500);
    })
  }

  addManual() {
    this.lista.push(JSON.parse(JSON.stringify(this.tagManual)));
    //this.tagManual = JSON.parse(JSON.stringify(new AnimalRFID()));
    this.tagManual.etiqueta = '';
    this.tagManual.peso = null;
  }

  ionViewDidLeave() {
    clearTimeout(this.timeoutGeral);
  }

  salvar() {
    try {
      let count = 0;
      this.lista.forEach(i => {
        this.animalApi.findOne({ where: { etiqueta: i.etiqueta } }).subscribe(
          (animal: Animal) => {
            count += 1;
            if (animal) {
              if (i.peso) {
                animal.peso = i.peso;
                this.animalApi.upsert(animal).subscribe();
              }
              let evento: AnimalEventos = new AnimalEventos();
              evento.nome = this.dadosDoForm.nome;
              evento.tipo = this.dadosDoForm.tipo;
              evento.data = this.dadosDoForm.data;
              evento.animalId = animal.id;
              this.eventoApi.upsert(evento).subscribe();
              if (count == this.lista.length) {
                setTimeout(() => {
                  alert('Lote processado com sucesso!')
                  this.navCtrl.setRoot('AnimalListaPage')
                }, 1000);
              }
            }
          }
        )
      });


    } catch (error) {
      alert(error);
    }
  }

}
