import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VendaListaPage } from './venda-lista';

@NgModule({
  declarations: [
    VendaListaPage,
  ],
  imports: [
    IonicPageModule.forChild(VendaListaPage),
  ],
})
export class VendaListaPageModule {}
