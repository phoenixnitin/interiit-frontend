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
    constructor(private _http : Http){

    }
    onclick(){
        console.log(this.imageArray);
    }

    ngOnInit(){
            jQuery(document).ready(() => {
                jQuery(".fancybox").fancybox({
                    type: 'image',
                    helpers : {
                        title: {
                            type: 'float'
                        }
                    }
                });
            });
            
            this._http.get('https://jsonplaceholder.typicode.com/photos')
                                .subscribe(res => {
                                    this.imageArray = res.json();
                                });
    }

}