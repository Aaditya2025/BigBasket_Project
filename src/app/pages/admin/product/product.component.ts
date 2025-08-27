import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit{
  isNewBtnClicked: boolean = false;
  productObj: any = {
    productId: 0,
    productSku: '',
    productName: '',
    productPrice: 0,
    productShortName: '',
    productDescription: '',
    createdDate: new Date(),
    deliveryTimeSpan: '',
    categoryId: 2147483647,
    productImageUrl: '',
    userId: 0,
  };
  categoryList: any[] = [];
  productsList: any[] = [];

  constructor(private productSrv: ProductService){}

  ngOnInit(): void {
    this.getProducts();
    this.getAllCategory();
  }

  getProducts(){
    this.productSrv.getProducts().subscribe((res:any) => {
      this.productsList = res.data;
    })
  }

  getAllCategory(){
    this.productSrv.getCategory().subscribe((res:any) => {
      this.categoryList = res.data;
    })
  }

  onUpdate(){
    this.productSrv.updateProduct(this.productObj).subscribe((res:any) =>{
      if(res.result){
        alert('Product Updated'); 
        this.getProducts();
      }else{
        alert(res.message)
      }
    })
  }

  onSave(){
    this.productSrv.saveProduct(this.productObj).subscribe((res:any) =>{
      if(res.result){
        alert('Product Created'); 
        this.getProducts();
      }else{
        alert(res.message)
      }
    })
  }

  onDelete(item:any){
    const isDelete = confirm('Are you Sure want ot delete')
    if(isDelete){
      this.productSrv.deleteProduct(item.productId).subscribe((res:any) =>{
      if(res.result){
        alert('Product Deleted'); 
        this.getProducts();
      }else{
        alert(res.message)
      }
    })
    }
  }

  onEdit(item: any){
    this.productObj = item;
    this.openNewProductPanel();
  }

  
  openNewProductPanel() {
    this.isNewBtnClicked = true;
  }
  closeNewProductPanel() {
    this.isNewBtnClicked = false;
  }
}
