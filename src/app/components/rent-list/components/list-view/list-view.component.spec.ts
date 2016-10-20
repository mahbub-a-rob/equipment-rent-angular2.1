import { inject, addProviders } from '@angular/core/testing';
import { provide } from '@angular/core';
import { EquipmentListService,
         RentListService,
         ListViewComponent,
         ItemModel,
         MenuService } from '../../index';

let itemsMocked = require('test/mocks/http/items-mocked').ITEMS;

describe(('RentListComponent:'), () => {
    beforeEach(() => {
        addProviders([
            ListViewComponent,
            provide(EquipmentListService, {useFactory: () => {
                return {
                    collection: itemsMocked
                }
            }}),
            provide(RentListService, {useFactory: () => {
                return {
                    collection: 
                    [{
                      who: 'user',
                      list: [itemsMocked[3], itemsMocked[5]]
                     },
                     {
                      who: 'user',
                      list: [itemsMocked[7], itemsMocked[2]]
                     }
                    ]
                }
            }}),
            provide(MenuService, {})
        ])
    })

    it('should delete item from RentListService.collection', 
        inject([ListViewComponent, RentListService], (component, service) => {
            let singleRent = service.collection[0];
            let deletedItem: ItemModel[] = component.deleteFromCollection(0, singleRent.list);
            expect(singleRent).toEqual(deletedItem[0]);
        })
    )

    it('should increment a proper limit properties in EquipmentListService', 
        inject([ListViewComponent, RentListService, EquipmentListService],
        (component: ListViewComponent,
         rentListService: RentListService,
         equipmentListService: EquipmentListService) => {

            let initialCollection = rentListService.collection;
            component.deleteFromCollection(0, rentListService.collection[0].list);

             for (let item of initialCollection[0].list) {
                 expect(item.limit).toBe(equipmentListService.collection[item.id].limit);
             }
        })
    )
    
})