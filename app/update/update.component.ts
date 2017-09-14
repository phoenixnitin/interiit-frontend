import {Component} from '@angular/core';
import {UpdateService} from './update.service';

@Component({
    selector: 'updatecomponent',
    templateUrl: './app/update/update.component.html'
})

export class UpdateComponent{
    
    constructor(private _updateService: UpdateService){

    }

updates = this._updateService.getupdates();

}