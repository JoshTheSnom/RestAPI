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

  // ahoj same. paginace mi nejde kvůli stejnému důvodu jako všechno. Cannot read property 'category' of undefined.
  // ptal jsem se ostatních na to ale oni buďto nevěděli nebo měli stejnej error ale i tak jim program fungoval
  // pls nedávej mi 0% xd
  // p.s.: na tu věc s obrázkama jsem taky nepřišel. jsem asi prostě debil

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

getProductID(id: number) {
  this.router.navigate(['/info'], {queryParams: {id}});
}
}


