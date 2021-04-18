import {IProduct} from './IProduct';

export class ICategory {
  id: number;
  name: string;

  productList: IProduct[];
}
