import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { EquipmentListService } from '../../../equipment/services/equipment-list.service';
import { ItemModel } from '../../index';

@Component({
    selector: 'add-form',
    template: require('./add-form.component.html'),
    styles: [ require('./add-form.component.scss')],
    encapsulation: ViewEncapsulation.Native
})
export class AddFormComponent {

    constructor(private _equipmentList: EquipmentListService
     ) { }

    onSubmit(newItemName: string) {
        let newId = this._equipmentList.collection.length;
        let newItem = new ItemModel(newId, newItemName, 1);
        let action = 'addNew'
        this._equipmentList.addToCollection(newItem, action);
        this._equipmentList.formActivated = !this._equipmentList.formActivated;
    }
}
