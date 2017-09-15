import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './app/navbar/navbar.html',
  styleUrls: ['./app/assets/css/navbar.css']
})

export class NavbarComponent {
    days;
    hours;
    minutes;
    seconds;
    countDownDate = new Date("Oct 1, 2017 00:00:00").getTime();

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

    // Output the result in an element with id="countdown"
  

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(this.x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);


}

