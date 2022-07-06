import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {
  cartDataList:any = [];
  productList = new BehaviorSubject<any>([]);
  
  constructor(private http:HttpClient) { }
// Get Product Data
  getProductData(){
    return this.productList.asObservable();
  }
// Set Product Data
  setProduct(product:any){
    this.cartDataList.push(...product);
    this.productList.next(product);
  }
// Add to cart Details
  addToCart(product:any){   
    this.cartDataList.push(product);    
    this.productList.next(this.cartDataList);
    this.getTotalAmount();
    console.log(this.cartDataList)
  }
  
//Get Toatal Amount
  getTotalAmount(){
    let grandTotal =0;
    this.cartDataList.map((a:any) => {
      grandTotal += a.total;
    })
  }
//Remove cart details one by one
  removeCartData(product:any){
    this.cartDataList.map((a:any, index:any) => {
      if(product.id === a.id){
        this.cartDataList.splice(index,1);
      }
    })
    this.productList.next(this.cartDataList);
  }
//remove all cart details
  removeAllCart(){
    this.cartDataList = [];
    this.productList.next(this.cartDataList);
  }

}
