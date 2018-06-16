import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FornecedorFormPage } from './fornecedor-form';

@NgModule({
  declarations: [
    FornecedorFormPage,
  ],
  imports: [
    IonicPageModule.forChild(FornecedorFormPage),
  ],
})
export class FornecedorFormPageModule {}
