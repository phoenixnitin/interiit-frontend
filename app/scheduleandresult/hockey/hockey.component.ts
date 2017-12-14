import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
    selector: 'app-hockey',
    templateUrl:'./app/scheduleandresult/hockey/hockey.html',
    styleUrls:['./app/assets/css/scheduleandresults.css', './app/assets/css/common.css']
})

export class HockeyComponent implements OnInit, AfterViewInit{

    constructor(){

    };
    ngOnInit(){};
    showIframe(){
      jQuery('.display-space iframe').removeClass('hide');
      jQuery('.display-space i').addClass('hide');
    };
    ngAfterViewInit(){
        jQuery(document).ready(function () {
            framedimen();
            jQuery(window).resize(function () {
                framedimen();
            });
            jQuery('#schedule').click(function () {
                jQuery('.display-space iframe').addClass('hide');
                jQuery('.display-space nav').children().removeClass('active');
                jQuery('.display-space iframe').attr('src','http://indiaatsports.com/widget_matches?tournamentid=4626982713163776');
                jQuery('#schedule').addClass('active');
                jQuery('.display-space i').removeClass('hide');
            });
            jQuery('#pointstable').click(function () {
                jQuery('.display-space iframe').addClass('hide');
                jQuery('.display-space nav').children().removeClass('active');
                jQuery('.display-space iframe').attr('src','http://indiaatsports.com/widget_pointstable?tournamentid=4626982713163776');
                jQuery('#pointstable').addClass('active');
                jQuery('.display-space i').removeClass('hide');
            });
            jQuery('#participants').click(function () {
                jQuery('.display-space iframe').addClass('hide');
                jQuery('.display-space nav').children().removeClass('active');
                jQuery('.display-space iframe').attr('src','http://indiaatsports.com/displayteamsandplayerslist?tournamentid=4626982713163776&orderingformat=byplayers');
                jQuery('#participants').addClass('active');
                jQuery('.display-space i').removeClass('hide');
            });
            function framedimen() {
                var window_height = jQuery(document).height();
                var heading_height = jQuery('.display-space h2').height();
                var nav_height = jQuery('.display-space nav').height();
                jQuery('.display-space iframe').attr('height', window_height - heading_height - nav_height - 150);
            }
            jQuery('#schedule').addClass('active');
        });
    };
}