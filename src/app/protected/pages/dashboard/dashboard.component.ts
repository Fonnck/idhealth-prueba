import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { MENU_ITEMS } from '../../../constants/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  public menu_items = MENU_ITEMS;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  signOut() {
    this.router.navigateByUrl('/auth/login');
  }
}
