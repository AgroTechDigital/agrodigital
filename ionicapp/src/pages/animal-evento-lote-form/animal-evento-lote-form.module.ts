import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimalEventoLoteFormPage } from './animal-evento-lote-form';

@NgModule({
  declarations: [
    AnimalEventoLoteFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimalEventoLoteFormPage),
  ],
})
export class AnimalEventoLoteFormPageModule {}
