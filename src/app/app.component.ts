import { Component } from '@angular/core';
import { CategoriesService } from './services/categories.service';
import { Category } from './models/category.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CustomBootstrap';

  public Categories: Category[]; 

  constructor(private httpClient: HttpClient, private CategoryService: CategoriesService, private router: Router,) {
      this.CategoryService.getCategories()
      .subscribe(
        (data: Category[]) => {
          this.Categories = data;
        }, (error) =>  {
          console.log(error);
        }
      );
  }
  getCategory(id: number){
    this.router.navigate(['/products'], {queryParams: {id}});
  }
}
