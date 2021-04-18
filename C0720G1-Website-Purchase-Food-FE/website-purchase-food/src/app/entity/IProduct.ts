import {ICategory} from './ICategory';
import {IStore} from './IStore';
import {IOrderProduct} from './IOrderProduct';

export class IProduct {
  id: number;
  name: string;
  price: string;
  discount: number;
  image: string;
  orderProductList: IOrderProduct[];
  categoryId: ICategory;
  storeId: IStore;

}
