import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinanceiroCategoriaListaPage } from './financeiro-categoria-lista';

@NgModule({
  declarations: [
    FinanceiroCategoriaListaPage,
  ],
  imports: [
    IonicPageModule.forChild(FinanceiroCategoriaListaPage),
  ],
})
export class FinanceiroCategoriaListaPageModule {}
