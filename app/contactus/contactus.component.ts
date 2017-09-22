import {Component} from '@angular/core';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-contactus',
    templateUrl:'./app/contactus/contactus.html',
    styleUrls:['./app/assets/css/contactus.css']
})

export class ContactUsComponent{

    allcontactdata={};
    alldept:Array<any> = ["Core", "WebOps", "Spons", "Design", "Facilities", "Events", "Media", "Security", "Hospitality", "Finance"];
    showdata(key, data){
            this.allcontactdata[key]=data[key];
        }
    constructor() {
        console.log(this.alldept.length, this.allcontactdata);
        var that = this;
        var counter=0;
        for (var i=0; i < that.alldept.length; i++) {
            jQuery.ajax({
                url: 'https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1WjO92CQ-BLEqGuqZXzSo-wqTx6YE5PZrRpFtSHhxv-c&sheet=' + that.alldept[i],
                type: "GET",
                dataType: "jsonp",
                async: true,
                success: function (msg) {
                    // console.log(Object.keys(msg)[0], msg);
                    that.showdata(Object.keys(msg)[0],msg);
                    counter++;
                    if(counter==that.alldept.length)
                        console.log(that.allcontactdata);
                },
                error: function () {
                    console.log("Error occurred");
                }
            });
        }
        console.log(this.allcontactdata);
    }
    
    ngOnInit(){
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
    }
}
