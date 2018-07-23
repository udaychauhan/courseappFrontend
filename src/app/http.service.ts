import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class HttpService {
  public baseUrl ='http://courseapi.udaychauhan.info/api/v1/cart';
    //'http://localhost:3002/api/v1/cart';

  constructor(private _http: HttpClient) {
    console.log("http service was called");
  }

  //cartId (not necessary),itemId, itemTitle
  public addItemToCart(data): any {
    let myResponse = this._http.post(this.baseUrl + '/addItemToCart', data);
    return myResponse;
  }

  public deleteItemFromCart(data): any {
    let myResponse = this._http.post(this.baseUrl + '/deleteItemFromCart', data);
    return myResponse;
  }

  public getCart(data): any {
    let myResponse = this._http.post(this.baseUrl + '/getCart', data);
    return myResponse;
  }

  public getUserInfoFromLocalstorage = () => {
    return JSON.parse(localStorage.getItem('cartId'));
  } // end getUserInfoFromLocalstorage


  public setUserInfoInLocalStorage = (data) => {
    localStorage.setItem('cartId', JSON.stringify(data))
  }

  trim = (x) => {
    let value = String(x)
    return value.replace(/^\s+|\s+$/gm, '')
  }

  isEmpty = (value) => {
    if (value === null || value === undefined || this.trim(value) === '' || value.length === 0) {
      return true
    } else {
      return false
    }
  }


}
