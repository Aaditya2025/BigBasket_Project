import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  searchText = '';
  productList:any[] = [];
  cataegoryList:any[] = [];

  constructor(private prodSrv: ProductService, private router: Router){

  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }

  navigateToProducts(id: number){
    this.router.navigate(['/products', id ])
  }

  getAllProducts(){
    this.prodSrv.getProducts().subscribe((res:any) => {
       this.productList = res.data;
    })
  }

  getAllCategory(){
    this.prodSrv.getCategory().subscribe((res:any) => {
      this.cataegoryList = res.data;
    })
  }

}
