import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewOrdersRoutingModule } from './view-orders-routing.module';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    ViewOrdersRoutingModule
  ]
})
export class ViewOrdersModule { }
