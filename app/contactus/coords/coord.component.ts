import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'contact-coord',
    templateUrl: './app/contactus/coords/coord.html',
    styleUrls: ['./app/assets/css/corecoord.css']
})

export class ContactCoordComponent{
WebOps: Array<object>; 
Spons: Array<object>;
Design: Array<object>;
Facilities: Array<object>;
Events: Array<object>;
Media: Array<object>;
Security: Array<object>;
Hospitality: Array<object>;
Finance: Array<object>;
image_url="http://www.drive.google.com/uc?export=view&id=";
dept = 'WebOps';

    webopsclicked(){
        this.dept = 'WebOps';
    }
    financeclicked(){
        this.dept = 'Finance';
    }
    facilitiesclicked(){
        this.dept = 'Facilities';
    }
    hospiclicked(){
        this.dept = 'Hospitality';
    }
    sponsclicked(){
        this.dept = 'Spons';
    }
    securityclicked(){
        this.dept = 'Security';
    }
    eventsclicked(){
        this.dept = 'Events';
    }
    designclicked(){
        this.dept = 'Design';
    }
    mediaclicked(){
        this.dept = 'Media';
    }
        constructor(private _http: Http){

        }
        ngOnInit(){
                //--------------Code For Animation-----------//
                jQuery(document).ready(function($) {

                    //Count nr. of square classes
                    var countSquare = $('.square').length;

                    //For each Square found add BG image
                    for (let i = 0; i < countSquare; i++) {
                        var firstImage = $('.square').eq([i]);
                        var secondImage = $('.square2').eq([i]);

                        var getImage = firstImage.attr('data-image');
                        var getImage2 = secondImage.attr('data-image');

                        firstImage.css('background-image', 'url(' + getImage + ')');
                        secondImage.css('background-image', 'url(' + getImage2 + ')');
                    }

                });
                //-----------Main Code for Service---------//

                //---------WebOps----//
                this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1WjO92CQ-BLEqGuqZXzSo-wqTx6YE5PZrRpFtSHhxv-c&sheet=WebOps')
                            .subscribe(res => {
                                this.WebOps = res.json().WebOps;
                                //console.log(this.WebOps);
                            });
                
                //---------Spons----//
                this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1WjO92CQ-BLEqGuqZXzSo-wqTx6YE5PZrRpFtSHhxv-c&sheet=Spons')
                            .subscribe(res => {
                                this.Spons = res.json().Spons;
                                //console.log(this.Spons);
                            });
                
                //---------Design----//
                this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1WjO92CQ-BLEqGuqZXzSo-wqTx6YE5PZrRpFtSHhxv-c&sheet=Design')
                            .subscribe(res => {
                                this.Design = res.json().Design;
                                //console.log(this.Design);
                            });

                //---------Facilities----//
                this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1WjO92CQ-BLEqGuqZXzSo-wqTx6YE5PZrRpFtSHhxv-c&sheet=Facilities')
                            .subscribe(res => {
                                this.Facilities = res.json().Facilities;
                                //console.log(this.Facilities);
                            });

                //---------Events----//
                this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1WjO92CQ-BLEqGuqZXzSo-wqTx6YE5PZrRpFtSHhxv-c&sheet=Events')
                            .subscribe(res => {
                                this.Events = res.json().Events;
                                //console.log(this.Events);
                            });

                //---------Media----//
                this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1WjO92CQ-BLEqGuqZXzSo-wqTx6YE5PZrRpFtSHhxv-c&sheet=Media')
                            .subscribe(res => {
                                this.Media = res.json().Media;
                                //console.log(this.Media);
                            });

                //---------Security----//
                this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1WjO92CQ-BLEqGuqZXzSo-wqTx6YE5PZrRpFtSHhxv-c&sheet=Security')
                            .subscribe(res => {
                                this.Security = res.json().Security;
                                //console.log(this.Security);
                            });

                //---------Hospitality----//
                this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1WjO92CQ-BLEqGuqZXzSo-wqTx6YE5PZrRpFtSHhxv-c&sheet=Hospitality')
                            .subscribe(res => {
                                this.Hospitality = res.json().Hospitality;
                                //console.log(this.Hospitality);
                            });

                //---------Finance----//
                this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1WjO92CQ-BLEqGuqZXzSo-wqTx6YE5PZrRpFtSHhxv-c&sheet=WebOps')
                            .subscribe(res => {
                                this.Finance = res.json().Finance;
                                //console.log(this.Finance);
                            });
                
            }

}
