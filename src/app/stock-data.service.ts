import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StockData} from './stockdata';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  constructor(private httpClient: HttpClient) { }

  getStockData(symbol: string): Observable<StockData> {
    return this.httpClient.get<StockData>(`http://api.marketstack.com/v1/eod?access_key=836ee9c14dba46a03ed8f53a5f515674&symbols=${symbol}&limit=1`);
  }
}
