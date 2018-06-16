import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PiqueteEventosListaPage } from './piquete-eventos-lista';

@NgModule({
  declarations: [
    PiqueteEventosListaPage,
  ],
  imports: [
    IonicPageModule.forChild(PiqueteEventosListaPage),
  ],
})
export class PiqueteEventosListaPageModule {}
