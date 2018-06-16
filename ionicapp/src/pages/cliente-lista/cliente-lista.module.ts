import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienteListaPage } from './cliente-lista';

@NgModule({
  declarations: [
    ClienteListaPage,
  ],
  imports: [
    IonicPageModule.forChild(ClienteListaPage),
  ],
})
export class ClienteListaPageModule {}
