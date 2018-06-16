import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManejoFormPage } from './manejo-form';

@NgModule({
  declarations: [
    ManejoFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ManejoFormPage),
  ],
})
export class ManejoFormPageModule {}
