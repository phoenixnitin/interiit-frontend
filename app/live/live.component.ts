import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-live',
    templateUrl:'./app/live/live.html',
    styleUrls:['./app/assets/css/live.css']
})

//How this Works!!
// There is a variable iframeSrc just put url in Live Data Sheet...
// iframeSrc will update if those objects in data array have status as online....
// Just add one more property for that object....Src.....
//if object.Src that is Src property of that object is empty string then iframeSrc variable wont change...
//also if object.Src is same as iframeSrc then it wont change....

export class LiveComponent implements OnInit{
    data: Array<object>;
    iframeSrc = "http://clappr.akamain.info:5698/Player.html?url=http://webtv.akamain.info:1935/7384/7384/playlist.m3u8";
    // status;
    // title;
    // participant;
    // score;
    // description;
    ngOnInit(){
      this.loadlive();
    };
    constructor(public sanitizer: DomSanitizer ,private _http: Http){
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
                                this.data.forEach((object) => {
                                  if(object.Status == "online" && this.iframeSrc!= object.Src && object.Src!=''){
                                    this.iframeSrc = object.Src;
                                  }
                                  else return;
                                });
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
