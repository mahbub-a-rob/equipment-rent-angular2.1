import { Component, OnInit } from '@angular/core';

import { EquipmentListService,
         RentListService,
         MenuService,
         ItemModel } from '../../index';

@Component({
    selector: 'list-view',
    template: require('./list-view.component.html'),
    styles: [ require('./list-view.component.scss')]
})

export class ListViewComponent implements OnInit {
    constructor(private _rentListService: RentListService,
                private _equipmentListService: EquipmentListService,
                private _menuService: MenuService
    ) { }

    ngOnInit() {
        setTimeout(() => {
            this._menuService.showIfHidden();
            this._rentListService.rentListHeader = 'Rent List';
        }, 0);
    }

    deleteFromCollection(itemNum: number, list: ItemModel[]) {
        for (let item of list) {
            this._equipmentListService.collection[item.id].limit++;
        }
        return this._rentListService.collection.splice(itemNum, 1);
    }
}
