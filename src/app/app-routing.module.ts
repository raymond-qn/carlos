import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'ftd',
    loadChildren: () => import('./ftd/ftd.module').then(m => m.FtdModule),
  },
  {
    path: 'supp',
    loadChildren: () => import('./supp/supp.module').then(m => m.SuppModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }