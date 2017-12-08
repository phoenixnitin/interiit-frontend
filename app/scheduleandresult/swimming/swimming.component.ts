import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'app-swimming',
    templateUrl:'./app/scheduleandresult/swimming/swimming.html',
    styleUrls:['./app/assets/css/scheduleandresults.css', './app/assets/css/common.css']
})

export class SwimmingComponent implements OnInit, AfterViewInit{
  men: Array<object>;
  women: Array<object>;
    constructor(private _http: Http){

    };
    ngOnInit(){
      let that = this;
      this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1mtNOpZNsjM7Av4b-a8NIFNogscf24F4q3hwCpqCXWCo&sheet=Men')
                            .subscribe(res => {
                                this.men = res.json().Men;
                                // console.log(this.men);
                            });
      this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1mtNOpZNsjM7Av4b-a8NIFNogscf24F4q3hwCpqCXWCo&sheet=Women')
                            .subscribe(res => {
                                this.women = res.json().Women;
                            });
    };
    ngAfterViewInit(){
        jQuery(document).ready(function () {
            framedimen();
            jQuery(window).resize(function () {
                framedimen();
            });
            // jQuery('#schedule').click(function () {
            //     jQuery('.display-space nav').children().removeClass('active');
            //     jQuery('.display-space iframe').attr('src','http://indiaatsports.com/widget_matches?tournamentid=6730339196076032');
            //     jQuery('#schedule').addClass('active');
            //     jQuery('.table-container').addClass('hide');
            //     jQuery('.display-space i').removeClass('hide');
            //     jQuery('.display-space iframe').removeClass('hide');
            // });
            // jQuery('#participants').click(function () {
            //     jQuery('.display-space nav').children().removeClass('active');
            //     jQuery('.display-space iframe').attr('src','http://indiaatsports.com/widget_participants?tournamentid=6730339196076032');
            //     jQuery('#participants').addClass('active');
            //     jQuery('.table-container').addClass('hide');
            //     jQuery('.display-space i').removeClass('hide');
            //     jQuery('.display-space iframe').removeClass('hide');
            // });
            jQuery('#schedule').click(function () {
                jQuery('.display-space nav').children().removeClass('active');
                jQuery('.display-space iframe').attr('src','http://indiaatsports.com/widget_matches?tournamentid=6730339196076032');
                jQuery('#schedule').addClass('active');
            });
            jQuery('#participants').click(function () {
                jQuery('.display-space nav').children().removeClass('active');
                jQuery('.display-space iframe').attr('src','http://indiaatsports.com/widget_participants?tournamentid=6730339196076032');
                jQuery('#participants').addClass('active');
            });
            jQuery('#pointstable').click(function () {
                jQuery('.display-space nav').children().removeClass('active');
                jQuery('.display-space iframe').attr('src','http://static.interiit.com/pages/swimming_points_table.html');
                jQuery('#pointstable').addClass('active');
            });
            // jQuery('#men-pointstable').click(function () {
            //     jQuery('.display-space nav').children().removeClass('active');
            //     jQuery('.display-space iframe').addClass('hide');
            //     jQuery('.display-space i').addClass('hide');
            //     jQuery('#men-pointstable').addClass('active');
            //     jQuery('.men-rows').removeClass('hide');
            //     jQuery('.women-rows').addClass('hide');
            //     jQuery('.table-container').removeClass('hide');
            // });
            // jQuery('#women-pointstable').click(function () {
            //     jQuery('.display-space nav').children().removeClass('active');
            //     jQuery('.display-space iframe').addClass('hide');
            //     jQuery('.display-space i').addClass('hide');
            //     jQuery('#women-pointstable').addClass('active');
            //     jQuery('.women-rows').removeClass('hide');
            //     jQuery('.men-rows').addClass('hide');
            //     jQuery('.table-container').removeClass('hide');
            // });
            function framedimen() {
                var window_height = jQuery(document).height();
                var heading_height = jQuery('.display-space h2').height();
                var nav_height = jQuery('.display-space nav').height();
                jQuery('.display-space i').removeClass('hide');
                jQuery('.display-space iframe').attr('height', window_height - heading_height - nav_height - 150);
                jQuery('.display-space nav #schedule').addClass('active');
            }
        });
    };
}