import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateOrdersRoutingModule } from './create-orders-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    CreateOrdersRoutingModule,
    FormsModule,
    CommonModule
  ]
})
export class CreateOrdersModule { }
