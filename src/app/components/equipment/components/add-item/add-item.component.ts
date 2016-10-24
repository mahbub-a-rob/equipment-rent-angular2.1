import { Component, Input } from '@angular/core';

import { AddFormComponent } from '../add-form/add-form.component';

import { EquipmentListService } from '../../../equipment/services/equipment-list.service';
import { ItemModel} from '../../index';

@Component({
    selector: 'add-item',
    template: require('./add-item.component.html'),
    styles: [ require('./add-item.component.scss') ]
})
export class AddItemComponent {

    @Input('singleItem') singleItem: ItemModel;

    constructor(private _equipmentList: EquipmentListService ) {}

    activateForm() {
        this._equipmentList.formActivated = !this._equipmentList.formActivated;
    }
}
