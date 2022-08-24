import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimeroPageRoutingModule } from './primero-routing.module';

import { PrimeroPage } from './primero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimeroPageRoutingModule
  ],
  declarations: [PrimeroPage]
})
export class PrimeroPageModule {}
