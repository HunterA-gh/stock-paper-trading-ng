import {Routes} from '@angular/router';
import {SignupComponent} from '../../pages/signup/signup.component';
import {LoginComponent} from '../../pages/login/login.component';
import {TradingComponent} from '../../pages/trading/trading.component';
import {NotificationsComponent} from '../../pages/notifications/notifications.component';
import {MortgagecalcComponent} from '../../pages/mortgagecalc/mortgagecalc.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: 'mortgagecalc', component: MortgagecalcComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'trading/:id', component: TradingComponent },
  { path: '**', component: SignupComponent}
];
