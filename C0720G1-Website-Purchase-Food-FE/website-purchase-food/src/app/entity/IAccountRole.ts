import {IAccount} from './IAccount';
import {IRole} from './IRole';

export class IAccountRole{
  id: number;
  account: IAccount;
  role: IRole;
}
