import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { Page } from '../models/page.model';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public name: string;
  public description: string;
  public page: Page;
  public products: Product;
  public categories: Category;

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private CategoryService: CategoriesService, private router: Router) {

  }

  getProductID(id) {
    this.router.navigate(['/productPage'], {queryParams: {id}});
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.CategoryService.getCategory(params.id)
        .subscribe((category: Page) => {
          this.page = category;
          this.products = category.products;
      });
    });
  }

}
