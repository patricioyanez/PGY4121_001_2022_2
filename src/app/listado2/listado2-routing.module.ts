import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listado2Page } from './listado2.page';

const routes: Routes = [
  {
    path: '',
    component: Listado2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listado2PageRoutingModule {}
