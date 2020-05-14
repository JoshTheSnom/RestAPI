import {Product} from './product.model';

export class Page {
    constructor(public category, public currentPage: number, public pagesCount, public products: Product) { }
}