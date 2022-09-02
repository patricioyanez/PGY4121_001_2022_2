import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
    path: 'primero',
    loadChildren: () => import('./primero/primero.module').then( m => m.PrimeroPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'listado2',
    loadChildren: () => import('./listado2/listado2.module').then( m => m.Listado2PageModule)
  },
  {
    path: 'promedio',
    loadChildren: () => import('./promedio/promedio.module').then( m => m.PromedioPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
