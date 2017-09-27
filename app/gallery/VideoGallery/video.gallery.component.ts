import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'gallery-image',
    templateUrl: './app/gallery/VideoGallery/video.gallery.html',
    styleUrls: ['./app/assets/css/imagegallery.css','./app/assets/css/fancybox.css']
})

export class VideoGalleryComponent implements OnInit{
videoArray;
    constructor(private _http : Http){

    }
    // onclick(){
    //     console.log(this.videoArray);
    // }

    ngOnInit(){

        this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1EcJRWQPx_IEjsq4EBeOoHfSSjqpxbziqdlFm0JsNkeI&sheet=Video')
            .subscribe(res => {
                this.videoArray = res.json().Video;
                // console.log(this.videoArray);
                jQuery(document).ready(() => {
                    jQuery(".various").fancybox({
                        maxWidth	: 800,
                        maxHeight	: 600,
                        fitToView	: true,
                        width		: '70%',
                        height		: '70%',
                        autoSize	: true,
                        closeClick	: true,
                        openEffect	: 'none',
                        closeEffect	: 'none',
                        nextEffect  : 'none',
                        prevEffect  : 'none',
                        helpers     : {
                            title : {
                                type : 'outside' // 'float', 'inside', 'outside' or 'over'
                            }
                        }
                    });
                });
            });
    }
}