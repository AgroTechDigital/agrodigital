import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Piquete, PiqueteApi, Modulo, ModuloApi, PiqueteEventosApi, PiqueteEventos } from '../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-piquete-form',
  templateUrl: 'piquete-form.html',
})
export class PiqueteFormPage {

  public dadosDoForm: Piquete = new Piquete();
  public listaModulos: Modulo[] = [];
  public listaEventos: PiqueteEventos[] = [];
  public piqueteSegment: string = 'informacoes';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public API: PiqueteApi,
    public moduloApi: ModuloApi,
    public piqueteEventosApi: PiqueteEventosApi
  ) {
    let item = navParams.get('item');
    if (item) this.dadosDoForm = Object.assign(new Piquete, item);
  }

  ionViewDidEnter() {
    //Buscar Todos os Modulos
    this.moduloApi.find().subscribe(
      (retorno: Modulo[]) => {
        this.listaModulos = retorno;
      }
    )

    //Buscar os eventos deste piquete
    this.buscarEventos();
  }

  callbackEventos = (_params) => {
    return new Promise((resolve, reject) => {
      this.buscarEventos();
      resolve();
    })
  }

  buscarEventos() {
    this.piqueteEventosApi.find({ where: { piqueteId: this.dadosDoForm.id }, order: 'createdAt DESC' }).subscribe(
      (data: PiqueteEventos[]) => {
        this.listaEventos = data;
      }
    )
  }

  abrirEvento(evento: PiqueteEventos) {
    let modal = this.modalCtrl.create('PiqueteEventosFormPage', { item: evento, callback: this.callbackEventos });
    modal.present();
  }

  novoEvento() {
    let modal = this.modalCtrl.create('PiqueteEventosFormPage', { piquete: this.dadosDoForm, callback: this.callbackEventos });
    modal.present();
  }

  salvar() {

    try {
      if (!this.dadosDoForm.nome) throw 'Informe um nome';
      if (!this.dadosDoForm.moduloId) throw 'Selecione algum módulo';

      this.API.upsert(this.dadosDoForm).subscribe(
        (retorno: Piquete) => {
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
