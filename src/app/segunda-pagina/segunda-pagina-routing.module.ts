import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegundaPaginaPage } from './segunda-pagina.page';

const routes: Routes = [
  {
    path: '',
    component: SegundaPaginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegundaPaginaPageRoutingModule {}
