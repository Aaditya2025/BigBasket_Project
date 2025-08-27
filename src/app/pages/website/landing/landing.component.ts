import { Component, Inject, OnInit } from '@angular/core';
import { ProductComponent } from '../../admin/product/product.component';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{
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
