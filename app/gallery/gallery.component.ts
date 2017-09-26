import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'gallery',
    templateUrl: './app/gallery/gallery.html',
    styleUrls: ['./app/assets/css/gallery.css', './app/assets/css/common.css']
})

export class GalleryComponent implements OnInit{
    ngOnInit(){
        if(window.location.pathname == "/gallery/video")
            jQuery('#gallery-video').addClass('active');
        else
            jQuery('#gallery-image').addClass('active');
        jQuery(document).ready(function ($) {


            $('#gallery-image').click(function () {
                $('#gallery-image').addClass('active');
                $('#gallery-video').removeClass('active');
            });
            $('#gallery-video').click(function () {
                $('#gallery-video').addClass('active');
                $('#gallery-image').removeClass('active');
            });
        });
    };
}