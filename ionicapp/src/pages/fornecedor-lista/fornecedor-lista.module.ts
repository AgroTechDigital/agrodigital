import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FornecedorListaPage } from './fornecedor-lista';

@NgModule({
  declarations: [
    FornecedorListaPage,
  ],
  imports: [
    IonicPageModule.forChild(FornecedorListaPage),
  ],
})
export class FornecedorListaPageModule {}
