import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'gallery-image',
    templateUrl: './app/gallery/ImageGallery/image.gallery.html',
    styleUrls: ['./app/assets/css/imagegallery.css']
})

export class ImageGalleryComponent{
imageArray;
    constructor(private _http : Http){

    }
    onclick(){
        console.log(this.imageArray);
    }

    ngOnInit(){
            $(document).ready(() => {
                $(".fancybox").fancybox({
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
