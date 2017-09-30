import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'app-live',
    templateUrl:'./app/live/live.html',
    styleUrls:['./app/assets/css/live.css']
})

export class LiveComponent implements OnInit{
    data: Array<object>;
    // status;
    // title;
    // participant;
    // score;
    // description;
    ngOnInit(){
      this.loadlive();
    };
    constructor(private _http: Http){
      let that = this;
      jQuery(document).ready(function () {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-74140602-1');
        // that.loadlive();
        window.setInterval(function () {
          that.loadlive();
        }, 5000);
      });
    }

    loadlive(){
      this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1aqljoEV1kLxP8ZtzsW3Cqj8-L72Q79trNJcsNM5B_Lo&sheet=livedata')
                            .subscribe(res => {
                                this.data = res.json().livedata;
                                // console.log(this.data);
                                this.filldata(this.data);
                            });
    }
    filldata(data){
      if(data[0].Status == 'online') {
        jQuery('#title h2').html(data[0].SportName);
        jQuery('#participant h2').html(data[0].Participant);
        jQuery('#score h2').html(data[0].Score);
        jQuery('#description h3').html(data[0].Description);
        jQuery('#livecontainer-alt').addClass('hide');
        jQuery('#livecontainer').removeClass('hide');
      }
      else{
        jQuery('#livecontainer').addClass('hide');
        jQuery('#livecontainer-alt').removeClass('hide');
      }
    }
}