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

  public listaTipoBase: any[] = [
    { id: 1, nome: "Touro", UA: 1.25, sexo: 'M', image: 'img-gado.jpg', qtdMacho: 0, qtdFemea: 0 },
    { id: 2, nome: "Vaca", UA: 1.0, sexo: 'F', image: 'img-gado.jpg', qtdMacho: 0, qtdFemea: 0 },
    { id: 3, nome: "De 2 a 3 anos", UA: 0.75, sexo: '', image: 'img-gado.jpg', qtdMacho: 0, qtdFemea: 0 },
    { id: 4, nome: "Até 2 Anos", UA: 0.50, sexo: '', image: 'img-gado.jpg', qtdMacho: 0, qtdFemea: 0 },
    { id: 5, nome: "Até 1 ano", UA: 0.25, sexo: '', image: 'img-gado.jpg', qtdMacho: 0, qtdFemea: 0 },
  ]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public API: PiqueteApi,
    public moduloApi: ModuloApi,
    public piqueteEventosApi: PiqueteEventosApi
  ) {
    let item = navParams.get('item');
    if (item) {
      this.dadosDoForm = Object.assign(new Piquete, item);
      if (!this.dadosDoForm.animaisSimplificado) this.dadosDoForm.animaisSimplificado = this.listaTipoBase;
    }
  }

  ionViewDidEnter() {
    this.moduloApi.find().subscribe(
      (retorno: Modulo[]) => {
        this.listaModulos = retorno;
      }
    )

    this.buscarEventos();
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

  callbackEventos = (_params) => {
    return new Promise((resolve, reject) => {
      this.buscarEventos();
      resolve();
    })
  }

}
