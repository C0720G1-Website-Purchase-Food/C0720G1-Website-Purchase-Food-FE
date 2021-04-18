import {IStore} from './IStore';
import {ICategory} from './ICategory';

export class IStoreDetail {
  id: number;
  storeId: IStore;
  categoryId: ICategory;
}
