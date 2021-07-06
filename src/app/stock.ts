import {User} from './user';

export class Stock {
  id: number;
  name: string;
  quantity: number;
  priceAtTransaction: number;
  user: User;
}
