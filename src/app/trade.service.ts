import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {Stock} from './stock';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  constructor(private httpClient: HttpClient) { }

  buyStock(stock: Stock, id: number): Subscription {
    return this.httpClient.post<Stock>(`http://localhost:8080/trading/${id}`, stock).subscribe(response => {});
  }

  sellStock(stock: Stock, id: number): Subscription {
    return this.httpClient.put<Stock>(`http://localhost:8080/trading/${id}`, stock).subscribe(response => {});
  }
}
