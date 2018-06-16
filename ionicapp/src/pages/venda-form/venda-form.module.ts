import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VendaFormPage } from './venda-form';

@NgModule({
  declarations: [
    VendaFormPage,
  ],
  imports: [
    IonicPageModule.forChild(VendaFormPage),
  ],
})
export class VendaFormPageModule {}
