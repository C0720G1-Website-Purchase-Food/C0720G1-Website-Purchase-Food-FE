import {IOrderProduct} from './IOrderProduct';
import {IProduct} from './IProduct';
import {ITransactions} from './ITransactions';

export class IOrderDetail {
  id: number;
  total: string;
  quantity: number;
  orderId: IOrderProduct;
  productId: IProduct;
  transactionList: ITransactions[];
}
