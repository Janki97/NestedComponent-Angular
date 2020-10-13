import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './Pages/customer/customer.component';
import { OrderComponent } from './Pages/order/order.component';
import { ProductComponent } from './Pages/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OrderComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
