import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import '../rxjs-extensions';


@Injectable()
export class TagService {

  private _serviceUrl = 'http://localhost:3000/tagList';  // URL to web api

  constructor(private http: HttpClient) { 
  }

  getTags(): Observable<any> {
    let url = this._serviceUrl;
    return this.http.get(url).pipe(data => data);
  }
}
