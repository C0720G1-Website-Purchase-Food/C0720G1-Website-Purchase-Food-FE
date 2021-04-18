import {IAccount} from './IAccount';
import {IComment} from './IComment';

export class IPost {
  id: number;
  content: string;
  date: string;
  accountId: IAccount;
  commentList: IComment[];
}
