import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManejoListaPage } from './manejo-lista';

@NgModule({
  declarations: [
    ManejoListaPage,
  ],
  imports: [
    IonicPageModule.forChild(ManejoListaPage),
  ],
})
export class ManejoListaPageModule {}
