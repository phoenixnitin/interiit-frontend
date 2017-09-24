import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-contactus',
    templateUrl: './app/contactus/contactus.html',
    styleUrls:['./app/assets/css/contactus.css']
})

export class ContactUsComponent{

    constructor(private _http: Http){

    }

    ngOnInit(){
        //--------------Code For Animation-----------//
        jQuery(document).ready(function($) {

            //Count nr. of square classes
            var countSquare = $('.square').length;

            //For each Square found add BG image
            for (let i = 0; i < countSquare; i++) {
                var firstImage = $('.square').eq(i);
                var secondImage = $('.square2').eq(i);

                var getImage = firstImage.attr('data-image');
                var getImage2 = secondImage.attr('data-image');

                firstImage.css('background-image', 'url(' + getImage + ')');
                secondImage.css('background-image', 'url(' + getImage2 + ')');
            }

        });
        //-----------Main Code for Service---------//

    }

}