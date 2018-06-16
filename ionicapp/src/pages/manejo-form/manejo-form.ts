import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Manejo, ManejoApi, PiqueteApi, Piquete } from '../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-manejo-form',
  templateUrl: 'manejo-form.html',
})
export class ManejoFormPage {

  public dadosDoForm: Manejo = new Manejo();
  public listaPiquetes: Piquete[] = [];

  public listaTipo: any[] = [
    { nome: "Touro", UA: 1.25, sexo: 'M', image: 'img-gado.jpg', qtdMacho: 0, qtdFemea: 0 },
    { nome: "Vaca", UA: 1.0, sexo: 'F', image: 'img-gado.jpg', qtdMacho: 0, qtdFemea: 0 },
    { nome: "Animais de 2 até 3 anos", UA: 0.75, sexo: '', image: 'img-gado.jpg', qtdMacho: 0, qtdFemea: 0 },
    { nome: "Animais até 2 Anos", UA: 0.50, sexo: '', image: 'img-gado.jpg', qtdMacho: 0, qtdFemea: 0 },
    { nome: "Animais até 1 ano", UA: 0.25, sexo: '', image: 'img-gado.jpg', qtdMacho: 0, qtdFemea: 0 },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public API: ManejoApi,
    public piqueteApi: PiqueteApi,
  ) {
    let item = navParams.get('item');
    if (item) this.dadosDoForm = Object.assign(new Manejo, item);
  }

  ionViewDidLoad() {
    //carrega os piquetes
    this.piqueteApi.find({}).subscribe(
      (data: Piquete[]) => {
        this.listaPiquetes = data;
      }
    )
  }

  soma(item: any, sexo: any) {
    if (sexo == 'F')
      item.qtdFemea = item.qtdFemea + 1;
    else if (sexo == 'M')
      item.qtdMacho = item.qtdMacho + 1;
    this.calcula();
  }

  subtrair(item: any, sexo: any) {
    if (sexo == 'F')
      item.qtdFemea = (item.qtdFemea == 0) ? 0 : item.qtdFemea - 1;
    else if (sexo == 'M')
      item.qtdMacho = (item.qtdMacho == 0) ? 0 : item.qtdMacho - 1;
    this.calcula();
  }

  calcula() {
    let ua = 0, total = 0;
    this.listaTipo.forEach(i => {
      if (i.sexo == 'M' || !i.sexo) {
        total += i.qtdMacho;
        ua += i.qtdMacho * i.UA;
      }
      if (i.sexo == 'F' || !i.sexo) {
        total += i.qtdFemea;
        ua += i.qtdFemea * i.UA;
      }
    });
    this.dadosDoForm.UA = ua;
    this.dadosDoForm.cabecas = total;
  }

  salvar() {

    try {
      if (!this.dadosDoForm.destinoId) throw 'informw o destino do manejo!';
      //recupera a origem e o destino
      let where = {
        or: [
          { id: this.dadosDoForm.destinoId }
        ]
      }
      if (this.dadosDoForm.origemId) {
        where.or.push({ id: this.dadosDoForm.origemId });
      }

      this.piqueteApi.find({ where: where }).subscribe((r: Piquete[]) => {

      });

      this.API.upsert(this.dadosDoForm).subscribe(
        (data: Manejo) => {
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
