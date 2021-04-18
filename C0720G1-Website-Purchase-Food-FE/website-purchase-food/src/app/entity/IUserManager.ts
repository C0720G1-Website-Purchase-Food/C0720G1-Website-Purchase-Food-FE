import {IAccount} from './IAccount';
import {IOrderProduct} from './IOrderProduct';

export class IUserManager {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  gender: boolean;
  image: string;

  accountId: IAccount;
  orderProductList: IOrderProduct[];
}
