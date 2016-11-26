import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { ItemModel } from '../../models';

import { Observable } from 'rxjs/Rx';

const host: string = 'http://localhost:8080';
const itemsUrl: string = '/app/items';

@Injectable()
/**
 * Http service for managing items
 */
export class HttpRequestsService {

    constructor(private _http: Http) { }

    public getItemsFromServer() {
        let options = new RequestOptions({ url: `${host}${itemsUrl}` });
        return this._http.get(itemsUrl, options)
                         .map(this.extractData)
                         .catch(this.handleError);
    }

    public postToServer(ItemName: ItemModel, searchParams: string) {
        let body = JSON.stringify(ItemName);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        options.url = `${host}${itemsUrl}`;
        options.search = new URLSearchParams(searchParams);

        return this._http.put(itemsUrl, body, options)
                         .map(this.extractData)
                         .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
