import {IOrderDetail} from './IOrderDetail';

export class ITransactions {
  id: number;
  status: boolean;
  message: string;
  dateTransactions: string;
  orderDetailId: IOrderDetail;
}
