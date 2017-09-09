import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<a [routerLink]="['/home']">Home</a> <br /> <a [routerLink]="['/contactus']" >ContactUs</a> 
                  <router-outlet></router-outlet>
  `
})
export class AppComponent { }
