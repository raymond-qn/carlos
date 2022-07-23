import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'inventory',
  children: [
    {
      path: '',
      loadChildren: () => import('./inventory/inventory-routing.module').then(m => m.InventoryRoutingModule),
    }
  ]
  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewInventoryRoutingModule { }
