import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { CategoryInfo } from '../models/categoryinfo.model';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public name: string;
  public description: string;
  public categoryInfo: CategoryInfo;
  public products: Product;
  public productsArray: Product[];
  public categoryid: number;
  public pageNumber: number;
  public pageCount: number;

  constructor(private httpClient: HttpClient, private CategoryService: CategoriesService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
        this.CategoryService.getCategory(params.id, this.pageNumber)
          .subscribe((category: CategoryInfo) => {
            this.pageCount = category.pagesCount;
            this.categoryInfo = category;
            this.products = category.products;
          });
      });
  }

addToCart(id: number) {
  this.router.navigate(['/cart'], {queryParams: {id}});
}
}


