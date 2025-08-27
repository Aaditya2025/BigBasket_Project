import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent {
  activeCategoryId:number = 0;
  products: any [] = []; 
  constructor(private activatedRoute:ActivatedRoute, private prodSrv: ProductService){
    this.activatedRoute.params.subscribe((res:any) => {
      this.activeCategoryId = res.id; 
      this.loadProducts();
    })
  }

  loadProducts(){
    this.prodSrv.getProductsByCategoryId(this.activeCategoryId).subscribe((res:any) => {
      this.products = res.data; 
    })
  }
}
