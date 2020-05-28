import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import APIKey from '../APIKey';
import {Category} from '../models/category.model';
import {CategoryInfo} from '../models/categoryinfo.model';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient  : HttpClient) { }

  getCategories(){
    const headers = new HttpHeaders().set('access-token', APIKey.access_token);
    return this.httpClient.get<Category[]>('/api/categories/', {headers});
  }

  getCategory(id: number, page: number){
    const headers = new HttpHeaders().set('access-token', APIKey.access_token);
    return this.httpClient.get<CategoryInfo>('/api/categories/' + id, {headers});
  }

  getInfo(id: number){
    const headers = new HttpHeaders().set('access-token', APIKey.access_token);
    return this.httpClient.get<Product>('/api/products/' + id, {headers});
  }

  getPage(id: number, page: number) {
    const headers = new HttpHeaders()
      .set('access-token', APIKey.access_token);

    return this.httpClient.get<CategoryInfo>('/api/categories/' + id + '/?page=' + page, {headers});
  }
}