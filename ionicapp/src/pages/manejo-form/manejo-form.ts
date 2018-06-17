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

  public listaTipoBase: any[] = [
    { id: 1, nome: "Touro", UA: 1.25, sexo: 'M', image: 'img-gado.jpg', qtdMacho: 0, qtdFemea: 0 },
    { id: 2, nome: "Vaca", UA: 1.0, sexo: 'F', image: 'img-gado.jpg', qtdMacho: 0, qtdFemea: 0 },
    { id: 3, nome: "De 2 a 3 anos", UA: 0.75, sexo: '', image: 'img-gado.jpg', qtdMacho: 0, qtdFemea: 0 },
    { id: 4, nome: "Até 2 Anos", UA: 0.50, sexo: '', image: 'img-gado.jpg', qtdMacho: 0, qtdFemea: 0 },
    { id: 5, nome: "Até 1 ano", UA: 0.25, sexo: '', image: 'img-gado.jpg', qtdMacho: 0, qtdFemea: 0 },
  ]

  public listaTipo: any[] = JSON.parse(JSON.stringify(this.listaTipoBase));

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
      // item.qtdFemea = (item.qtdFemea == 0) ? 0 : item.qtdFemea - 1;
      item.qtdFemea -= 1;
    else if (sexo == 'M')
      // item.qtdMacho = (item.qtdMacho == 0) ? 0 : item.qtdMacho - 1;
      item.qtdMacho -= 1;
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


  calculaPiquete(piquete: Piquete): Piquete {
    piquete.cabecas = 0;
    piquete.UA = 0;
    piquete.animaisSimplificado.forEach(i => {
      if (i.sexo == 'M' || !i.sexo) {
        piquete.cabecas += i.qtdMacho;
        piquete.UA += i.qtdMacho * i.UA;
      }
      if (i.sexo == 'F' || !i.sexo) {
        piquete.cabecas += i.qtdFemea;
        piquete.UA += i.qtdFemea * i.UA;
      }
    });
    return piquete;
  }

  salvar() {

    if (confirm('Deseja realmente finalizar o manejo?')) {
      try {
        if (!this.dadosDoForm.destinoId) throw 'informw o destino do manejo!';

        //recupera a origem e o destino
        let where = {
          or: []
        }
        if (this.dadosDoForm.origemId) where.or.push({ id: this.dadosDoForm.origemId });
        if (this.dadosDoForm.destinoId) where.or.push({ id: this.dadosDoForm.destinoId });

        if (where.or.length) {
          console.log('where ok');

          this.piqueteApi.find({ where: where }).subscribe((r: Piquete[]) => {
            console.log('piquetes', r);
            //Origem
            let origem: Piquete = null;
            if (this.dadosDoForm.origemId) {
              origem = r.find(x => x.id == this.dadosDoForm.origemId);
              console.log('origem', origem);
              if (!origem.animaisSimplificado) {
                origem.animaisSimplificado = this.listaTipoBase;
              }
              origem.animaisSimplificado.forEach(i => {
                let animal = this.listaTipo.find(x => x.id == i.id);
                if (animal.sexo == 'M') i.qtdMacho -= animal.qtdMacho;
                else if (animal.sexo == 'F') i.qtdFemea -= animal.qtdFemea;
                else {
                  i.qtdMacho += animal.qtdMacho;
                  i.qtdFemea += animal.qtdFemea;
                }
              });
              origem = this.calculaPiquete(origem);
              this.piqueteApi.upsert(origem).subscribe();
            }

            //Destino
            let destino: Piquete = null;
            if (this.dadosDoForm.destinoId) {
              console.log('destino', destino);
              destino = r.find(x => x.id == this.dadosDoForm.destinoId);
              console.log('destino', destino);
              if (!destino.animaisSimplificado) {
                destino.animaisSimplificado = this.listaTipoBase;
              }
              destino.animaisSimplificado.forEach(i => {
                let animal = this.listaTipo.find(x => x.id == i.id);
                if (animal.sexo == 'M') i.qtdMacho += animal.qtdMacho;
                else if (animal.sexo == 'F') i.qtdFemea += animal.qtdFemea;
                else {
                  i.qtdMacho += animal.qtdMacho;
                  i.qtdFemea += animal.qtdFemea;
                }
              });
              console.log('destino final', destino);
              destino = this.calculaPiquete(destino);
              this.piqueteApi.upsert(destino).subscribe();
            }
          });
        }

        this.dadosDoForm.animaisSimplificado = this.listaTipo;

        this.dadosDoForm.data = new Date();
        this.dadosDoForm.estacao = "chuva";

        this.API.upsert(this.dadosDoForm).subscribe(
          (data: Manejo) => {
            setTimeout(() => {
              this.navCtrl.setRoot('AnimalListaPage');
            }, 1000);
          }
        )

      } catch (error) {
        alert(error);
      }
    }
  }

  excluir() {

  }

}
