import { Component, OnInit, AfterContentChecked  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ItemModel } from '../../models/item.model';
import { EquipmentListService } from '../equipment/services/equipment-list.service';
import { HttpRequestsService } from '../../services';

@Component({
    selector: 'item-detail',
    template: require('./item-detail.component.html'),
    styles: [ require('./item-detail.component.scss') ]
})

export class ItemDetailComponent implements OnInit, AfterContentChecked  {
    item: ItemModel;
    private sub: any;
    private id: number;

    constructor(private _equipmentList: EquipmentListService,
                private _route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            this.id = +params['id'];
        });
    }

    ngAfterContentChecked() {
        if (this._equipmentList.collection.length !== 0 && this.item === undefined) {
             this.item = this._equipmentList.collection[this.id];
        };
    }

    goBack() {
        window.history.back();
    }
}
