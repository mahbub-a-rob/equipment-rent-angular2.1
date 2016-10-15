import { Component } from '@angular/core';
import '../../public/css/styles.css';
let io = require('./../../node_modules/socket.io-client/socket.io.js');

import { Headers, RequestOptions, Response, Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public sampleData = [{ before: 'Whatch here after clicking the button'}];
  public downloadedData: Array<any> = [];
  public errorText = `Data could not have been loaded because of: `;
  public errorMessage: Array<any> = [];
  public socket:any = null;
  public inputField: string = 'Write Here!'

  constructor (private _http: Http) { 
    this.socket = io.connect('http://localhost:8080');
    this.socket.on('message', () => {
      console.log('message received!')
    });

    this.socket.on('inputedData', (inputedData: string) => {
      this.inputField = inputedData;
      console.log('inputedData received!: ', inputedData)
    })
   }

  getData(){
    this.getItemsFromServer().subscribe(
      items => this.downloadedData.push(items),
      error =>  this.errorMessage.push({error: this.errorText + <any>error})
    )
    console.log(this.downloadedData)
  }

  getItemsFromServer(){
        let itemsUrl = '/items' 
        let options = new RequestOptions();
        options.url = `http://localhost:8080${itemsUrl}`;
    
        return this._http.get(itemsUrl, options)
                         .map(this.extractData)
                         .catch(this.handleError);
  }

  private extractData(res: Response) {
      let body = res.json();
      return body || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  sendInput(event: Event) {
    console.log('inputed text: ', event.target['value']);
    this.socket.emit('inputedData', event.target['value'])
  }

 }