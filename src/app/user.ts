import {Stock} from './stock';

export class User {
  id: number;
  username: string;
  password: string;
  balance: number;
  stocks: Stock[];
}
