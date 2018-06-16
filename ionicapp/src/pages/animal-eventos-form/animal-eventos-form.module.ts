import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimalEventosFormPage } from './animal-eventos-form';

@NgModule({
  declarations: [
    AnimalEventosFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimalEventosFormPage),
  ],
})
export class AnimalEventosFormPageModule {}
