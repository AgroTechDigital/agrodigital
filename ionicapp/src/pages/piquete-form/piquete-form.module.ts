import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PiqueteFormPage } from './piquete-form';

@NgModule({
  declarations: [
    PiqueteFormPage,
  ],
  imports: [
    IonicPageModule.forChild(PiqueteFormPage),
  ],
})
export class PiqueteFormPageModule {}
