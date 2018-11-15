import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";

import '../rxjs-extensions';

import { Category } from '../model/category';

@Injectable()
export class CategoryService {

  private _serviceUrl = 'http://localhost:3000/categories';  // URL to web api

  constructor(private http: HttpClient) {
  }

  // getCategories(): Observable<Category[]> {
  //   return this.http.get(url).map(res => res.json() );
  // }
  getCategories(): Observable<Category[]> {
    let url = this._serviceUrl;
    return this.http.get(url).map<any,Category[]>((res) => res)
    // return this.http.get().pipe(res => res)
  }
 
  
}
