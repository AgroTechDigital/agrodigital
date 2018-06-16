import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModuloFormPage } from './modulo-form';

@NgModule({
  declarations: [
    ModuloFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ModuloFormPage),
  ],
})
export class ModuloFormPageModule {}
