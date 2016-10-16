import { inject, addProviders, async } from '@angular/core/testing';

import { Http,
         Response,
         HTTP_PROVIDERS,
         ResponseOptions,
         RequestOptionsArgs,
         RequestOptions,
         Headers } from '@angular/http';

import { provide } from '@angular/core';

import { EquipmentListService,
         ItemModel,
         HttpRequestsService} from '../index';

import { Observable } from "rxjs/Rx";
import { Subscriber } from 'rxjs/Subscriber';

let itemsMocked = require('test/mocks/http/items-mocked').ITEMS;

describe('equipment-list service:', () => {

    beforeEach(() => {

        let httpGet = (url: string) => {
            return Observable.create((subscriber: Subscriber<Response>) => {
                        let options = new ResponseOptions({body: {data: itemsMocked}});
                        options.status = 200;
                        subscriber.next(new Response(options));
                        subscriber.complete();
                    })
        }

        let httpPost = (url: string, body: any, options?: RequestOptionsArgs): Observable<Response> => {
            return Observable.create((subscriber: Subscriber<any>) => {
                let options = new ResponseOptions({body: {data: new ItemModel(10, 'New Item')}})
                options.status = 200;
                subscriber.next(new Response(options));
                subscriber.complete();
            });
        }

        addProviders([
            EquipmentListService,
            provide(HttpRequestsService, {useFactory: () => {
                return {
                    getItemsFromServer: () => {
                        return httpGet(itemsMocked).map((res: Response) => {
                                                        let body = res.json();
                                                        return body.data || {};
                                                    })
                    },
                    postToServer: (newItemName) => {
                        let itemsUrl = 'app/items';
                        let body = JSON.stringify(newItemName);
                        let headers = new Headers({ 'Content-Type': 'application/json' });
                        let options = new RequestOptions({ headers: headers });

                        return httpPost(itemsUrl, body, options).map((res: Response) => {
                                                                            let body = res.json();
                                                                            return body.data || {};
                                                                        })
                    }
                }
            }})
        ]);
    });

    it('Collection of items should be taken from server when the service is instantiated',
        inject([EquipmentListService],
        (service: EquipmentListService) => {            
            expect(service.collection).toEqual(itemsMocked);
        })
    )

    it('checkes if getItemsFromServer is called after getItems method invocation',
        inject([EquipmentListService, HttpRequestsService],
        (equipmentListService: EquipmentListService, HttpRequestsService: HttpRequestsService) => {
            spyOn(HttpRequestsService, 'getItemsFromServer').and.callThrough();
            equipmentListService.getItems();
            expect(HttpRequestsService.getItemsFromServer).toHaveBeenCalled();
        })
    )

    it('checkes if postToServer is called after addToCollection method invocation',
        inject([EquipmentListService, HttpRequestsService],
        (equipmentListService: EquipmentListService, HttpRequestsService: HttpRequestsService) => {
            spyOn(HttpRequestsService, 'postToServer').and.callThrough();
            equipmentListService.addToCollection(new ItemModel(10, 'New Item'));
            expect(HttpRequestsService.postToServer).toHaveBeenCalled();
        })
    )

    it('checks if a new item has been added to collection via addToCollection method',
        inject([EquipmentListService], (service: EquipmentListService) => {
            let oldCollection = service.collection;
            let newItem = new ItemModel(service.collection.length, 'New Item');
            service.addToCollection(newItem);
            expect(oldCollection.length + 1).toBe(service.collection.length);

        }))

    it('checks if the item added is equal to the one get from server via response object',
        inject([EquipmentListService],
        (service: EquipmentListService) => {
            let newItem = new ItemModel(service.collection.length, 'New Item');
            service.addToCollection(newItem);

            let collectionLength = service.collection.length
            expect(service.collection[collectionLength - 1]).toEqual(newItem);
        })
    )
})