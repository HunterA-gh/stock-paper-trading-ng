import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/trading/:id',
    title: 'Paper Trading',
    rtlTitle: 'لوحة القيادة',
    icon: 'icon-money-coins',
    class: ''
  },
  {
    path: '/login',
    title: 'Login',
    rtlTitle: 'الرموز',
    icon: 'icon-badge',
    class: ''
  },
  {
    path: '/signup',
    title: 'Sign Up',
    rtlTitle: 'خرائط',
    icon: 'icon-notes',
    class: '' },
  {
    path: '/mortgagecalc',
    title: 'Mortgage Calculator',
    rtlTitle: 'خرائط',
    icon: 'icon-istanbul',
    class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
