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
    iframeObj="";
    iframeObjPre="";

    // iframeSrc = "http://clappr.akamain.info:5698/Player.html?url=http://webtv.akamain.info:1935/7384/7384/playlist.m3u8";
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
        // window.dataLayer = window.dataLayer || [];
        // function gtag(){dataLayer.push(arguments);}
        // gtag('js', new Date());
        //
        // gtag('config', 'UA-74140602-1');
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
                                // console.log(this.data[1]);
                                // this.data.forEach((object) => {
                                //   if(this.data[0].Status == "online" && this.iframeObj != this.data[0].iframeObj){
                                //     this.iframeObj = this.data[0].iframeObj;
                                //     if(this.iframeObj != this.iframeObjPre)
                                //       jQuery('#iframe-object').html(this.data[0].iframeObj);
                                //     this.iframeObjPre = this.iframeObj;
                                //   }
                                  // else return;
                                // });
                                this.filldata(this.data[0]);
                            });
    }
    filldata(data){
      if(data.Status == 'online') {
        jQuery('#title h2').html(data.SportName);
        jQuery('#participant h2').html(data.Participant);
        jQuery('#score h2').html(data.Score);
        jQuery('#description h3').html(data.Description);
        jQuery('#livecontainer-alt').addClass('hide');
        jQuery('#livecontainer').removeClass('hide');
      }
      else{
        // jQuery('#iframe-container').addClass('hide');
        jQuery('#livecontainer-alt').removeClass('hide');
        // jQuery('#iframe-object').remove();
        if(data.showText == 'on'){
          jQuery('#title h2').html(data.SportName);
          jQuery('#participant h2').html(data.Participant);
          jQuery('#score h2').html(data.Score);
          jQuery('#description h3').html(data.Description);
          jQuery('#livecontainer').removeClass('hide');
        }
        else{
          jQuery('#livecontainer').addClass('hide');
        }
      }
    }
}
