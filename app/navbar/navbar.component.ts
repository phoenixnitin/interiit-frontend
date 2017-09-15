import * as $ from 'jquery';
import { Component } from '@angular/core';
@Component({
  selector: 'navbar',
  templateUrl: './app/navbar/navbar.html',
  styleUrls: ['./app/assets/css/navbar.css']
})
export class NavbarComponent {

    var countDownDate = new Date("Oct 1, 2017 00:00:00").getTime();

// Update the count down every 1 second
    var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = '<span class="number" style="color: red;">'+days + '</span>D / <span class="number" style="color: red;">' + hours + '</span>H / <span class="number"  style="color: red;">'
    + minutes + '</span>M / <span class="number" style="color: red;">' + seconds + '</span>S';

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

}
