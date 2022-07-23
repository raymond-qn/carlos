import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'order',
  children: [
    {
      path: '',
      loadChildren: () => import('./view/view-routing.module').then(m => m.ViewRoutingModule),
    }
  ]
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewOrdersRoutingModule { }
