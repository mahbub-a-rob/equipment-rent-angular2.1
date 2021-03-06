import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { EquipmentListService } from '../services/equipment-list.service';
import { CommunicationService,
         SearchService,
         ItemModel } from '../index';

@Component({
    selector: 'equipment',
    template: require('./equipment.component.html'),
    styles: [ require('./equipment.component.scss') ]
})
export class EquipmentComponent implements OnInit, OnDestroy {
    selectedItem: ItemModel;
    searchValue: 'Rope';

    constructor(private _equipmentList: EquipmentListService,
                private _searchService: SearchService,
                private _communicationService: CommunicationService) {}

    ngOnInit() {
        setTimeout(() => {
            this._searchService.isActive = true;
        }, 0);
    }

    ngOnDestroy() {
        this._searchService.isActive = false;
    }

    selectItem(item: ItemModel) {
        this._equipmentList.singleItem = item;
        this._communicationService.confirmSelection(item);
    }
}
