import { Component } from '@angular/core';
import { Router, NavigationStart, RouterEvent, Event, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationEnd } from '@angular/router';

@Component({
  selector: 'clase-app',
  template: `
  <div class="container">
      <clase-navbar></clase-navbar>
      <router-outlet></router-outlet>
  </div>
  `
  
})

export class AppComponent {
  title = 'angular-ux';


  
  constructor(private router:Router) {
   
  }
}
