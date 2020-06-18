import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { ProductsComponent } from './products/products.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
