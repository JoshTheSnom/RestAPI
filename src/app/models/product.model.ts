import {Image} from './image.model';
export class Product {
    constructor(public id: number, public title: string, public description: string, public unitsInStock: number, public price: number, public images: Image[], public parameters: string, public ratings: []){ }
}