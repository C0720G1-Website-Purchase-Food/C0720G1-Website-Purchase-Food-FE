import {IAccountRole} from './IAccountRole';
import {IAdminManager} from './IAdminManager';

export class IAccount {
  id: number;
  userName: string;
  passWord: string;
  accountRoleList: IAccountRole[];

  adminManager: IAdminManager;

}
