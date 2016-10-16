import { inject, addProviders } from '@angular/core/testing';
import { Http,
         Response,
         ResponseOptions,
         RequestOptionsArgs } from '@angular/http';
import { provide } from '@angular/core';

import { HttpRequestsService } from './http-requests.service'
import { ItemModel } from '../index'

import { Observable } from "rxjs/Rx";
import { Subscriber } from 'rxjs/Subscriber';

let itemsMocked = require('test/mocks/http/items-mocked').ITEMS;

describe(('HttpRequestsService:'), () => {
    beforeEach(() => {
        addProviders([
            HttpRequestsService,
            provide(Http, {useFactory: () => {
                return {
                    get(url: string) {
                        return Observable.create((subscriber: Subscriber<Response>) => {});
                    },
                    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
                        return Observable.create((subscriber: Subscriber<any>) => {});
                    }
            }}})
        ])
    });

    it('should call http.get method on getItemsFromServer method',
        inject([HttpRequestsService, Http], (service: HttpRequestsService, http: Http) => {
            spyOn(http, 'get').and.callThrough();
            service.getItemsFromServer();
            expect(http.get).toHaveBeenCalled;
        })
    )

    it('should call http.post method on postToServer method',
        inject([HttpRequestsService, Http], (service: HttpRequestsService, http: Http) => {
            spyOn(http, 'post').and.callThrough();
            service.postToServer(new ItemModel(11, 'New item'));
            expect(http.get).toHaveBeenCalled;
        })
    )
})