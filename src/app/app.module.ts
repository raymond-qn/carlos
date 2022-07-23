import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { CreateOrdersModule } from './ftd/create-orders/create-orders.module';
import { ViewOrdersModule } from './ftd/view-orders/view-orders.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,                            // <========== Add this line!
    NgbModule,
    AuthModule,
    CreateOrdersModule,
    ViewOrdersModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
