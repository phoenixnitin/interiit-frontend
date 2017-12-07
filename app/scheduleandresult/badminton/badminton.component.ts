import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
    selector: 'app-badminton',
    templateUrl:'./app/scheduleandresult/badminton/badminton.html',
    styleUrls:['./app/assets/css/scheduleandresults.css', './app/assets/css/common.css']
})

export class BadmintonComponent implements OnInit, AfterViewInit{

    constructor(){

    };
    ngOnInit(){};
    ngAfterViewInit(){
        jQuery(document).ready(function () {
            framedimen();
            jQuery(window).resize(function () {
                framedimen();
            });
            jQuery('#schedule').click(function () {
                jQuery('.display-space nav').children().removeClass('active');
                jQuery('.display-space iframe').attr('src','https://worldatsports.appspot.com/widget_matches?tournamentid=5597420641583104');
                jQuery('#schedule').addClass('active');
            });
            jQuery('#pointstable').click(function () {
                jQuery('.display-space nav').children().removeClass('active');
                jQuery('.display-space iframe').attr('src','https://worldatsports.appspot.com/widget_pointstable?tournamentid=5597420641583104');
                jQuery('#pointstable').addClass('active');
            });
            jQuery('#participants').click(function () {
                jQuery('.display-space nav').children().removeClass('active');
                jQuery('.display-space iframe').attr('src','https://worldatsports.appspot.com/widget_participants?tournamentid=5597420641583104');
                jQuery('#participants').addClass('active');
            });
            function framedimen() {
                var window_height = jQuery(document).height();
                var heading_height = jQuery('.display-space h2').height();
                var nav_height = jQuery('.display-space nav').height();
                jQuery('.display-space iframe').attr('height', window_height - heading_height - nav_height - 150);
                jQuery('#schedule').addClass('active');
            }
        });
    };
}