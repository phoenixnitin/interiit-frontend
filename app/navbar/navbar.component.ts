import { Component } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'navbar',
  templateUrl: './app/navbar/navbar.html',
  styleUrls: ['./app/assets/css/navbar.css']
})

export class NavbarComponent {
    Width; 
    Height;

    constructor(){
        this.Width = window.screen.width;
        this.Height = window.screen.height;
    }

    toggleMenu() {
      jQuery('.button_container').toggleClass('active');
      jQuery('.overlay').toggleClass('open');
      jQuery('body').toggleClass('active');
    };

}
