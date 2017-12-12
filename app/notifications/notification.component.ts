import {Component} from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-notification',
    templateUrl:'./app/notifications/notification.html',
    styleUrls:['./app/assets/css/notification.css']
})

export class NotificationComponent{
    notification: Array<object>;
    constructor(private _http: Http){
      this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1vyh9pK7QJjwZxgRvXxhVKaxJV0y8VACcvm4Y5v9KxEM&sheet=Notification')
                  .subscribe(res => {
                    this.notification = res.json().Notification;
                    console.log(this.notification);
                    jQuery('#notification-page i.fa-spinner').addClass('hide');
                  }, error => {
                    jQuery('notification-page').html('Please check your network connection and try again.')
                  });
    }
}