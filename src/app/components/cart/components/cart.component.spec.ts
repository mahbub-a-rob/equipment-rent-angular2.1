import { inject, addProviders } from '@angular/core/testing';

import { CartComponent,
         CartService,
         EquipmentListService,
         HttpRequestsService,
         RentListService, 
         ItemModel,
         RentListModel} from '../index';

import { provide } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

let cartMocked = require('test/mocks/cart-mocked').CART;
let itemsMocked = require('test/mocks/http/items-mocked').ITEMS;

describe('CartComponent:', () => {

    beforeEach(() => {
        addProviders([
            provide(EquipmentListService, { useFactory: () => {
                return {
                    collection: itemsMocked
                }
            }}),
            provide(HttpRequestsService, {}),
            CartComponent,
            provide(CartService, {useFactory: () => {
                return {
                    collection: cartMocked
                }
            }}),
            provide(RentListService, {useFactory: () => {
                return {
                    addToCollection: (cart) => {}
                }
            }}),
            provide(Router, {
                useFactory: () => {
                    return {
                        navigate: (item: ItemModel): string => { return '/item-detail/' + item[0].id }
                    };
                }
            })
        ])
    })

    it('should call navigate method after calling goToDetails()',
        inject([CartComponent, Router],
        (component: CartComponent, router: Router) => {
            spyOn(router, 'navigate');
            component.selectedItem = new ItemModel(5, 'mySelectedItem');
            component.goToDetails();
            
            expect(router.navigate).toHaveBeenCalled();
        })
    )

    it('should navigate to the right path',
        inject([CartComponent, Router],
        (component: CartComponent, router: Router) => {
            component.selectedItem = new ItemModel(5, 'mySelectedItem')
            let path = router.navigate([component.selectedItem]);

            expect(path).toBe(`/item-detail/${component.selectedItem.id}`)

        }
    ))

    it('should add to collection of rentListService',
        inject([CartComponent, RentListService], (component, service) => {
            spyOn(service, 'addToCollection');
            component.rentAll([]);
            expect(service.addToCollection).toHaveBeenCalled();
            
        })
    )

    it('should reset cart collection after added to rentList collection',
        inject([CartComponent, RentListService, CartService],
        (component, rentListService: RentListService, cartService: CartService) => {
            spyOn(rentListService, 'addToCollection');
            let rentedItems: ItemModel[] = [new ItemModel(3, 'Rope'), new ItemModel(4, 'Helmet')]
            cartService.collection = rentedItems;
            component.rentAll(cartService.collection);
            expect(cartService.collection).toEqual([]);
        })
    )

    it('should delete a proper item from collection',
        inject([CartComponent, CartService, EquipmentListService],
        (component: CartComponent, cartService: CartService, equipmentListService: EquipmentListService) => {
            let itemNum = 1;
            let deletedItem = cartService.collection[itemNum];
            component.deleteFromCollection(itemNum);
            expect(deletedItem.id).toEqual(equipmentListService.collection[deletedItem.id].id);
        })
    )

    it(`should increment item's limit after deletion`,
        inject([CartComponent, CartService, EquipmentListService],
        (component: CartComponent, cartService: CartService, equipmentListService: EquipmentListService) => {
            let itemNum = 2;
            let deletedItem = cartService.collection[itemNum];
            component.deleteFromCollection(itemNum);
            expect(equipmentListService.collection[deletedItem.id].limit).toBe(deletedItem.limit + 1);
        })
    )
})