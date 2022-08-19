import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundaPaginaPageRoutingModule } from './segunda-pagina-routing.module';

import { SegundaPaginaPage } from './segunda-pagina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundaPaginaPageRoutingModule
  ],
  declarations: [SegundaPaginaPage]
})
export class SegundaPaginaPageModule {}
