import {Component} from '@angular/core';

@Component({
    selector: 'app-live',
    templateUrl:'./app/live/live.html',
    styleUrls:['./app/assets/css/live.css']
})

export class LiveComponent{

    constructor(){
      jQuery(document).ready(function () {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)};
        gtag('js', new Date());

        gtag('config', 'UA-74140602-1');
      });
    }

}