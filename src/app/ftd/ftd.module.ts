import { NgModule } from '@angular/core';
import { CreateOrdersModule } from './create-orders/create-orders.module';
import { ViewOrdersModule } from './view-orders/view-orders.module';

const FtdModules = [
  CreateOrdersModule,
  ViewOrdersModule
];

@NgModule({
  declarations: [],
  imports: [
    FtdModules
  ]
})
export class FtdModule { }
