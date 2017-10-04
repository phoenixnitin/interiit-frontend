import { Component } from '@angular/core';
import * as jQuery from 'jquery';
import {UpdateService} from './notification.service';
import {Http} from '@angular/http';
// import {win} from "@angular/platform-browser/src/facade/browser";

@Component({
  selector: 'navbar',
  templateUrl: './app/navbar/navbar.html',
  styleUrls: ['./app/assets/css/navbar.css']
})

export class NavbarComponent {
    Width; 
    Height;

    notificationShow = false;

    constructor(private _updateService: UpdateService, private _http: Http){
        this.Width = window.screen.width;
        this.Height = window.screen.height;
        let that = this;
        jQuery(document).ready(function () {
          that.loadlive();
          window.setInterval(function () {
            that.loadlive();
          }, 5000);
        });
    }

    toggleMenu() {
      jQuery('.button_container').toggleClass('active');
      jQuery('.overlay').toggleClass('open');
      jQuery('body').toggleClass('active');
    };

    // notification(){
    //   this.notificationShow = !this.notificationShow;
    //   console.log('Button Pressed!!')
    // }

    // updates = this._updateService.getupdates();

  loadlive(){
      this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1aqljoEV1kLxP8ZtzsW3Cqj8-L72Q79trNJcsNM5B_Lo&sheet=livedata')
                            .subscribe(res => {
                                 let data = res.json().livedata;
                                // console.log(this.data);
                                this.toggleLive(data);
                            });
    }
  toggleLive(data){
    if(data[0].Status == 'online'){
      jQuery('.live-status').removeClass('color-red').addClass('color-green');
    }
    else{
      jQuery('.live-status').removeClass('color-green').addClass('color-red');
    }
  }
}
