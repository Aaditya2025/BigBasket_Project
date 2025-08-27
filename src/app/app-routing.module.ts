import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductComponent } from './pages/admin/product/product.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { ProductsComponent } from './pages/website/products/products.component';
import { CartComponent } from './pages/admin/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'shop',
        component: ProductsComponent,
      },
      {
        path: 'products/:id',
        component: CategoryProductsComponent,
      }
    ],  
  },
  {
    path: '', 
    component:LandingComponent,
    children:[
      {
        path: 'Allproducts',
        component:ProductsComponent
      }, 
      {
        path: 'products/:id', 
        component:CategoryProductsComponent
      }, 
      {
        path: 'cart', 
        component: CartComponent
      }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'category',
        component: CategoriesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
