import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class MyServiceService {
  configUrl = 'assets/config.json';
  constructor(private http : HttpClient) { }

  getServiceData(){
    return this.http.get(this.configUrl);
  }

}
