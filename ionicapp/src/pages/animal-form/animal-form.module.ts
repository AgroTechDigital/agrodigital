import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimalFormPage } from './animal-form';

@NgModule({
  declarations: [
    AnimalFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimalFormPage),
  ],
})
export class AnimalFormPageModule {}
