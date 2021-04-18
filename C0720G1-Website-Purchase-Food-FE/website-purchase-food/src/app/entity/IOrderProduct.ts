import {IUserManager} from './IUserManager';
import {IOrderDetail} from './IOrderDetail';

export class IOrderProduct {
  id: number;
  date: string;
  status: boolean;

  userManagerId: IUserManager;
  orderDetailList: IOrderDetail[];
}
