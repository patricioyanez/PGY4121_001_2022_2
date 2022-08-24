import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'primero',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'segunda-pagina',
    loadChildren: () => import('./segunda-pagina/segunda-pagina.module').then( m => m.SegundaPaginaPageModule)
  },
  {
    path: 'tercera',
    loadChildren: () => import('./tercera/tercera.module').then( m => m.TerceraPageModule)
  },
  {
    path: 'cuatro',
    loadChildren: () => import('./cuatro/cuatro.module').then( m => m.CuatroPageModule)
  },
  {
    path: 'primero',
    loadChildren: () => import('./primero/primero.module').then( m => m.PrimeroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
