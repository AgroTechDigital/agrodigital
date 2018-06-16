import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimalListaPage } from './animal-lista';

@NgModule({
  declarations: [
    AnimalListaPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimalListaPage),
  ],
})
export class AnimalListaPageModule {}
