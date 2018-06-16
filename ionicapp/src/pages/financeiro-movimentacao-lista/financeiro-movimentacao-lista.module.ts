import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinanceiroMovimentacaoListaPage } from './financeiro-movimentacao-lista';

@NgModule({
  declarations: [
    FinanceiroMovimentacaoListaPage,
  ],
  imports: [
    IonicPageModule.forChild(FinanceiroMovimentacaoListaPage),
  ],
})
export class FinanceiroMovimentacaoListaPageModule {}
