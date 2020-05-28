import {Product} from './product.model';

export class CategoryInfo {
    constructor(public category, public currentPage: number, public pagesCount, public products: Product) { }
}