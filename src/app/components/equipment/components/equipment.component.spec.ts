import { inject, addProviders, async } from '@angular/core/testing';

import { Http } from '@angular/http';
import { provide } from '@angular/core';

import { EquipmentComponent,
         SearchService,
         EquipmentListService,
         HttpRequestsService,
         CommunicationService,
         ItemModel } from '../index';

describe('Equipment component: ', () => {

    beforeEach(() => {
        addProviders([
            EquipmentComponent,
            provide(SearchService, {useFactory: function() {
                return {
                    searchValue: '',
                    isActive: undefined
                }
            }}),
            provide(EquipmentListService, {useFactory: () => {
                return {
                    singleItem: new ItemModel(1, 'Item')
                }
            }}),
            provide(HttpRequestsService, {deps: [Http]}),
            provide(CommunicationService, { useFactory: () => {
                return {
                    confirmSelection: () => {}
                };
            }})
        ])
    });

    it('to activate search component set SearchService.isActive to true after init of EquipmentComponent',
        async(
            inject([EquipmentComponent, SearchService],
            (equipmentComponent: EquipmentComponent, searchService: SearchService) => {
                equipmentComponent.ngOnInit();
                setTimeout(function() {                
                    expect(searchService.isActive).toBe(true);
                }, 0);
            })
        )
    )

    it('should SearchService.isActive to be false when EquipmentComponent destruction',
        inject([EquipmentComponent, SearchService],
        (equipmentComponent: EquipmentComponent, searchService: SearchService) => {
            equipmentComponent.ngOnDestroy();
            expect(searchService.isActive).toBe(false);
        })
    )

    it('should set selected item to the after method selectItem triggers',
        inject([EquipmentComponent, EquipmentListService], (component, service) => {
            let item = new ItemModel(99, 'SelectedItem');
            component.selectItem(item);
            expect(service.singleItem).toEqual(item);
        })
    )
})