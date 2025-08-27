import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { CartComponent } from './pages/admin/cart/cart.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { CustomerComponent } from './pages/admin/customer/customer.component';
import { OrderComponent } from './pages/admin/order/order.component';
import { ProductComponent } from './pages/admin/product/product.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { CustomerCartComponent } from './pages/website/customer-cart/customer-cart.component';
import { CheckoutComponent } from './pages/website/checkout/checkout.component';
import { CutomerOrdersComponent } from './pages/website/cutomer-orders/cutomer-orders.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './pages/website/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    CartComponent,
    CategoriesComponent,
    CustomerComponent,
    OrderComponent,
    ProductComponent,
    LandingComponent,
    ProductComponent,
    CategoryProductsComponent,
    CustomerCartComponent,
    CheckoutComponent,
    CutomerOrdersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
