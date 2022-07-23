import { NgModule } from '@angular/core';
import { ViewInventoryModule } from './view-inventory/view-inventory.module';
import { ViewOrdersModule } from './view-orders/view-orders.module';

const suppModules = [
  ViewInventoryModule,
  ViewOrdersModule
];

@NgModule({
  declarations: [],
  imports: [
    suppModules
  ]
})
export class SuppModule { }
