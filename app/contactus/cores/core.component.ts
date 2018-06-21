import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'contact-core',
    templateUrl: './app/contactus/cores/core.html',
    styleUrls: ['./app/assets/css/corecoord.css']
})

export class ContactCoreComponent implements OnInit{

image_url="http://www.drive.google.com/uc?export=view&id=";
//image_url='./app/assets/pic1.jpg';

cores: Array<object>;
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
                this._http.get('https://script.google.com/macros/s/AKfycbwX7x2MJxOBJe2muzWr1SVS093M7EQzDnnGpi_q5PJw4MBK-uye/exec?id=1WjO92CQ-BLEqGuqZXzSo-wqTx6YE5PZrRpFtSHhxv-c&sheet=Core')
                            .subscribe(res => {
                                this.cores = res.json().Core;
                                // console.log(this.cores);
                            });
            }

}
