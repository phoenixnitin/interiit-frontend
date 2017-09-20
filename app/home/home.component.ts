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

                        setTimeout(() => {
                            this.two.nativeElement.style.top = '50%';
                        }, this.delay * 6);
                        setTimeout(() => {
                            this.two.nativeElement.style.top = '100%';
                        }, this.delay * 11);

                        setTimeout(() => {
                            this.three.nativeElement.style.top = '50%';
                        }, this.delay * 12);
                        setTimeout(() => {
                            this.three.nativeElement.style.top = '100%';
                        }, this.delay * 17);
                    };
                        animation();
                        setInterval(animation, this.delay * 18);
            },900);
    };

mouseclick() {
    jQuery('html, body').animate({
      scrollTop: jQuery(".about").offset().top - 150
    }, 800);
  };

    // scroll(){
    //         console.log('Hey!! You Scrolled!!');
    //         //console.log(this._el.nativeElement.querySelectorAll('.hideme'));
    //         this._el.nativeElement.querySelectorAll('.hideme').forEach( item => {

    //         var bottom_of_object = item.offset().top + item.outerHeight();
    //         var bottom_of_window = this.parent.nativeElement.scrollTop() + this.parent.nativeElement.height();
    //         if (bottom_of_window > bottom_of_object) {
    //             item.animate('1.25s', style({ opacity: 1 }));
    //         }
    //        });
    // };
}
