import { Component } from '@angular/core';
import * as jQuery from 'jquery';
import {UpdateService} from './notification.service';

@Component({
  selector: 'navbar',
  templateUrl: './app/navbar/navbar.html',
  styleUrls: ['./app/assets/css/navbar.css']
})

export class NavbarComponent {
    Width; 
    Height;

    notificationShow = false;

    constructor(private _updateService: UpdateService){
        this.Width = window.screen.width;
        this.Height = window.screen.height;
    }

    toggleMenu() {
      jQuery('.button_container').toggleClass('active');
      jQuery('.overlay').toggleClass('open');
      jQuery('body').toggleClass('active');
    };

    notification(){
      this.notificationShow = !this.notificationShow;
      console.log('Button Pressed!!')
    }

    updates = this._updateService.getupdates();

}
