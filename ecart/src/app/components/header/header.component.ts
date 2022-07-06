import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalItemNumber :number = 0
  constructor(private cartapi:CartapiService) { }

  ngOnInit(): void {
    this.cartapi.getProductData().subscribe(res => {
       this.totalItemNumber = res.length;
    })
  }

}
