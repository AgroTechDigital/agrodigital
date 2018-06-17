import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PiqueteApi, FinanceiroMovimentacaoApi } from '../../app/shared/sdk';

//@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  public Cabecas: number = 0;
  public UA: number = 0;
  public Piquetes: number = 0;
  public Debito: number = 0;
  public Credito: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public piqueteApi: PiqueteApi,
    public finamMovimentApi: FinanceiroMovimentacaoApi
  ) {

    this.piqueteApi.relatorioGeral().subscribe(
      (data: any) => {
        this.Cabecas = data.totalCabecas;
        this.UA = data.totalUA;
        this.Piquetes = data.piquetes;
        this.finamMovimentApi.relatorioMovimentacoesFinanceiras().subscribe(
          (data2: any[]) => {
            data2.forEach(e => {
              if (e._id) this.Debito = e.total;
              else this.Credito = e.total;
            });
          }
        );
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
