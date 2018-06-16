import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompraListaPage } from './compra-lista';

@NgModule({
  declarations: [
    CompraListaPage,
  ],
  imports: [
    IonicPageModule.forChild(CompraListaPage),
  ],
})
export class CompraListaPageModule {}
