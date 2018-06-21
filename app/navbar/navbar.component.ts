import { Component } from '@angular/core';
// import * as jQuery from 'jquery';
import {UpdateService} from './notification.service';
import {Http} from '@angular/http';
// import {window} from "@angular/platform-browser/src/facade/browser";

@Component({
  selector: 'navbar',
  templateUrl: './app/navbar/navbar.html',
  styleUrls: ['./app/assets/css/navbar.css']
})

export class NavbarComponent {
    Width; 
    Height;
    livestatus= false;

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
      jQuery('body').toggleClass('active overflowHide');

    };

    notification(){
      this.notificationShow = !this.notificationShow;
      console.log('Button Pressed!!')
    }

    updates = this._updateService.getupdates();

  loadlive(){
      this._http.get('https://script.google.com/macros/s/AKfycbwX7x2MJxOBJe2muzWr1SVS093M7EQzDnnGpi_q5PJw4MBK-uye/exec?id=1aqljoEV1kLxP8ZtzsW3Cqj8-L72Q79trNJcsNM5B_Lo&sheet=livedata')
                            .subscribe(res => {
                                 let data = res.json().livedata;
                                // console.log(this.data);
                                this.toggleLive(data);
                            });
    }
  toggleLive(data){
    let count =0;
    for(let i=0;i<data.length;i++){
      if(data[i].Status == 'online'){
        count++;break;
      }
    }
    this.livestatus = (count == 0 )? false : true;
    if(this.livestatus == true){
      jQuery('.live-status').removeClass('color-red').addClass('color-green');
    }
    else{
      jQuery('.live-status').removeClass('color-green').addClass('color-red');
    }
  }
}
