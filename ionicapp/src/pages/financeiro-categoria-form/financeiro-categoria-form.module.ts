import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinanceiroCategoriaFormPage } from './financeiro-categoria-form';

@NgModule({
  declarations: [
    FinanceiroCategoriaFormPage,
  ],
  imports: [
    IonicPageModule.forChild(FinanceiroCategoriaFormPage),
  ],
})
export class FinanceiroCategoriaFormPageModule {}
