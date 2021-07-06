import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../user';
import {Stock} from '../../stock';
import {ActivatedRoute} from '@angular/router';
import {StockDataService} from '../../stock-data.service';
import {UserService} from '../../user.service';
import {TradeService} from '../../trade.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
  }


}
