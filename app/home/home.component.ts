import {Component,ViewChild,ElementRef,animate,style} from '@angular/core';
import * as jQuery from 'jquery';

@Component({
    selector: 'app-home',
    templateUrl:'./app/home/home.html',
    styleUrls: ['./app/assets/css/home.css']
})

export class HomeComponent{
@ViewChild('one')one;
@ViewChild('two')two;
@ViewChild('three')three;
@ViewChild('parent')parent;
addloadedClass = false;

delay = 650;

    constructor(private _el:ElementRef){}

    ngAfterViewInit(){
            setTimeout(() => {
                this.addloadedClass = true;
            }, 100);

            setTimeout(() => {
                    var animation = () => {
                        setTimeout(() => {
                            this.one.nativeElement.style.top = '50%';
                        }, this.delay);
                        setTimeout(() => {
                            this.one.nativeElement.style.top = '100%';
                        }, this.delay * 5);

                        // setTimeout(() => {
                        //     this.two.nativeElement.style.top = '50%';
                        // }, this.delay * 6);
                        // setTimeout(() => {
                        //     this.two.nativeElement.style.top = '100%';
                        // }, this.delay * 11);

                        setTimeout(() => {
                            this.three.nativeElement.style.top = '50%';
                        }, this.delay * 6);
                        setTimeout(() => {
                            this.three.nativeElement.style.top = '100%';
                        }, this.delay * 11);
                    };
                        animation();
                        setInterval(animation, this.delay * 11);
            },600);
    };

mouseclick() {
    jQuery('html, body').animate({
      scrollTop: jQuery(".about").offset().top - 150
    }, 800);
  };

    days;
    hours;
    minutes;
    seconds;
    countDownDate = new Date("Dec 15, 2017 00:00:00").getTime();

// Update the count down every 1 second
    x = setInterval(() => {

    // Get todays date and time
    let now = new Date().getTime();

    // Find the distance between now an the count down date
    let distance = this.countDownDate - now;

    // Time calculations for days, hours, minutes and seconds

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(this.days < 10)
        this.days = "0"+String(this.days);
    if(this.hours < 10)
        this.hours = "0"+String(this.hours);
    if(this.minutes < 10)
        this.minutes = "0"+String(this.minutes);
    if(this.seconds < 10)
        this.seconds = "0"+String(this.seconds);
    // Output the result in an element with id="countdown"


    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(this.x);
        document.getElementById("countdown").innerHTML = "";
    }
}, 1000);
}
