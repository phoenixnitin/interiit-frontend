import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
    selector: 'app-tabletennis',
    templateUrl:'./app/scheduleandresult/tabletennis/tabletennis.html',
    styleUrls:['./app/assets/css/scheduleandresults.css', './app/assets/css/common.css']
})

export class TableTennisComponent implements OnInit, AfterViewInit{

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
                jQuery('.display-space iframe').attr('src','http://indiaatsports.com/widget_matches?tournamentid=5752882620006400');
                jQuery('#schedule').addClass('active');
            });
            jQuery('#pointstable').click(function () {
                jQuery('.display-space nav').children().removeClass('active');
                jQuery('.display-space iframe').attr('src','http://indiaatsports.com/widget_pointstable?tournamentid=5752882620006400');
                jQuery('#pointstable').addClass('active');
            });
            jQuery('#participants').click(function () {
                jQuery('.display-space nav').children().removeClass('active');
                jQuery('.display-space iframe').attr('src','http://indiaatsports.com/widget_participants?tournamentid=5752882620006400');
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