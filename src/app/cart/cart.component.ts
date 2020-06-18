import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public arr = [];
  public pay: number;

  constructor(private activatedRoute: ActivatedRoute, private products: CategoriesService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(i => {
      this.products.getInfo(i.id).subscribe((data: Product) => {
        this.arr.push(data);
        console.log(this.arr);
        localStorage.setItem('jsonproduct', JSON.stringify(this.arr));
        const jsonProduct = localStorage.getItem('jsonproduct');
        this.arr = JSON.parse(jsonProduct);
      });
    });
    const jsonProduct2 = localStorage.getItem('jsonproduct');
    this.arr = JSON.parse(jsonProduct2);
    const result = this.arr.map(res => res.price).reduce((a,b) => a + b, 0);
    this.pay = result;
  }

  getProductID(id: number) {
    this.router.navigate(['/info'], {queryParams: {id}});
  }

}

