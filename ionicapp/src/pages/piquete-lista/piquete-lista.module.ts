import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PiqueteListaPage } from './piquete-lista';

@NgModule({
  declarations: [
    PiqueteListaPage,
  ],
  imports: [
    IonicPageModule.forChild(PiqueteListaPage),
  ],
})
export class PiqueteListaPageModule {}
