import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompraFormPage } from './compra-form';

@NgModule({
  declarations: [
    CompraFormPage,
  ],
  imports: [
    IonicPageModule.forChild(CompraFormPage),
  ],
})
export class CompraFormPageModule {}
