import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimalEventosListaPage } from './animal-eventos-lista';

@NgModule({
  declarations: [
    AnimalEventosListaPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimalEventosListaPage),
  ],
})
export class AnimalEventosListaPageModule {}
