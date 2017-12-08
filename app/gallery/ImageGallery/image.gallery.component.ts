import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'gallery-image',
    templateUrl: './app/gallery/ImageGallery/image.gallery.html',
    styleUrls: ['./app/assets/css/imagegallery.css','./app/assets/css/fancybox.css']
})

export class ImageGalleryComponent implements OnInit{
imageArray;
imageCounter= 20;
showClick = true;
    constructor(private _http : Http){

    }
    // onclick(){
    //     console.log(this.imageArray);
    // }

    ngOnInit(){

            
            this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1EcJRWQPx_IEjsq4EBeOoHfSSjqpxbziqdlFm0JsNkeI&sheet=Image')
                                .subscribe(res => {
                                    this.imageArray = res.json().Image;
                                    jQuery(document).ready(() => {
                                        // console.log("help");
                                        jQuery(".fancybox").fancybox({
                                            type: 'image',
                                            helpers : {
                                                title: {
                                                    type: 'float'
                                                }
                                            }
                                        });
                                    });
                                });
    }
    clickMore(){
      this.imageCounter = this.imageCounter + 20;
      if(this.imageCounter > this.imageArray.length){
        this.showClick = false;
      }
    }

}
