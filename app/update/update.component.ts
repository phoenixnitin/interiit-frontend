import {Component} from '@angular/core';
import {UpdateService} from './update.service';

@Component({
    selector: 'updatecomponent',
    templateUrl: './app/update/update.component.html',
    styleUrls: ['./app/assets/css/update.css']
})

export class UpdateComponent{
    
    constructor(private _updateService: UpdateService){

    }

updates = this._updateService.getupdates();

}