import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProductList:any = [];
  allProductsPrice:any = 0;
  constructor(private cartapi:CartapiService) { }

  ngOnInit(): void {
    this.cartapi.getProductData().subscribe(res =>{
      this.cartProductList = res;
      console.log(this.cartProductList);
      this.allProductsPrice = this.cartapi.getTotalAmount();
    })
  }
  removeProduct(item:any){
    this.cartapi.removeCartData(item);
  }
  removeAllProducts(){
    this.cartapi.removeAllCart();
  }

}
