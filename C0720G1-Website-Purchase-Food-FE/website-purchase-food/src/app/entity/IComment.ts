import {IPost} from './IPost';
import {IAccount} from './IAccount';

export class IComment {
  id: number;
  content: string;
  date: string;
  postId: IPost;
  accountId: IAccount;
  commentId: IComment;
}
