import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewInventoryRoutingModule } from './view-inventory-routing.module';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [InventoryComponent],
  imports: [
    CommonModule,
    ViewInventoryRoutingModule
  ]
})
export class ViewInventoryModule { }
