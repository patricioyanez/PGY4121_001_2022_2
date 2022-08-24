import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimeroPage } from './primero.page';

const routes: Routes = [
  {
    path: '',
    component: PrimeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimeroPageRoutingModule {}
