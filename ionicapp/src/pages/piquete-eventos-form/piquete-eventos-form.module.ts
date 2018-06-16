import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PiqueteEventosFormPage } from './piquete-eventos-form';

@NgModule({
  declarations: [
    PiqueteEventosFormPage,
  ],
  imports: [
    IonicPageModule.forChild(PiqueteEventosFormPage),
  ],
})
export class PiqueteEventosFormPageModule {}
