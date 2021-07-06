import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Stock} from '../../stock';
import {UserService} from '../../user.service';
import {StockDataService} from '../../stock-data.service';
import {TradeService} from '../../trade.service';
import {ActivatedRoute} from '@angular/router';

declare const TradingView: any;
@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.scss']
})
export class TradingComponent implements OnInit {

  user: User;
  totalBalance: number;
  portfolioTotal = 0;

  marketValues = [];
  pricePerShare = [];

  buyForm: FormGroup;
  sellForm: FormGroup;


  responseToValue(response: any): number{
    const jsonData = JSON.stringify(response);
    const regexMatch = jsonData.match('"close":(\\d+).(\\d+)');
    return parseFloat(regexMatch[1] + '.' + regexMatch[2]);
  }

  buy(): void {
    const stockToBuy = new Stock();
    stockToBuy.name = this.buyForm.get('stockName1').value;
    stockToBuy.quantity = this.buyForm.get('quantity1').value;

    const id = this.activatedRoute.snapshot.params[`id`];

    this.stockdataService.getStockData(stockToBuy.name).subscribe(
      response => {
        stockToBuy.priceAtTransaction = this.responseToValue(response);
        this.tradeService.buyStock(stockToBuy, id);
        window.location.reload();
      });

  }

  sell(): void{
    const stockToSell = new Stock();
    stockToSell.name = this.sellForm.get('stockName2').value;
    stockToSell.quantity = this.sellForm.get('quantity2').value;

    const id = this.activatedRoute.snapshot.params[`id`];

    this.stockdataService.getStockData(stockToSell.name).subscribe(
      response => {
        stockToSell.priceAtTransaction = this.responseToValue(response);
        this.tradeService.sellStock(stockToSell, id);
        window.location.reload();
      });
  }


  constructor(
    private userService: UserService,
    private stockdataService: StockDataService,
    private tradeService: TradeService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.buyForm = this.formBuilder.group({
      stockName1: formBuilder.control('', [Validators.required]),
      quantity1: formBuilder.control('', [Validators.required, Validators.min(1)])});

    this.sellForm = this.formBuilder.group({
      stockName2: formBuilder.control('', [Validators.required]),
      quantity2: formBuilder.control('', [Validators.required, Validators.min(1)])
    });

    const id = this.activatedRoute.snapshot.params[`id`];

    this.userService.getUserById(id).subscribe(
      response => {
        this.user = response;

        this.totalBalance = this.user.balance;

        this.user.stocks.forEach(
          stock => {
            this.stockdataService.getStockData(stock.name).subscribe(
              response2 => {
                const stockValue = this.responseToValue(response2);
                const totalMarketValue = stock.quantity * stockValue;
                this.pricePerShare.push(stockValue);
                this.marketValues.push(totalMarketValue);
                this.totalBalance += totalMarketValue;
                this.portfolioTotal += totalMarketValue;
              });
          });
      });
  }


  ngOnInit() {

    new TradingView.widget(
      {
        "width": 1580,
        "height": 410,
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "America/New_York",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "withdateranges": true,
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "details": true,
        "calendar": true,
        "container_id": "tradingview_a19c0"
      }
    );

  }
}
