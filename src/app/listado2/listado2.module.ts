import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listado2PageRoutingModule } from './listado2-routing.module';

import { Listado2Page } from './listado2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listado2PageRoutingModule
  ],
  declarations: [Listado2Page]
})
export class Listado2PageModule {}
