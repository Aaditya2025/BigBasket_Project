import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getCategory(){
    return this.http.get('/api/api/BigBasket/GetAllCategory');
  }

  getProductsByCategoryId(id:number){
    return this.http.get('/api/api/BigBasket/GetAllProductsByCategoryId?id=' + id);
  }

  getProducts(){
    return this.http.get('/api/api/BigBasket/GetAllProducts');
  }

  saveProduct(obj:any){
    return this.http.post('/api/api/BigBasket/CreateProduct', obj);
  }

  updateProduct(obj:any){
    return this.http.post('/api/api/BigBasket/UpdateProduct', obj);
  }

  deleteProduct(id:any){
    return this.http.get('/api/api/BigBasket/DeleteProductById?id=' + id)
  }
}
