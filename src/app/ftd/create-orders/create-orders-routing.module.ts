import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {
  path: 'order',
  children: [
    {
      path: '',
      loadChildren: () => import('./orders/orders-routing.module').then(m => m.OrdersRoutingModule),
    }
  ]
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateOrdersRoutingModule { }
