import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const endpoint = "http://127.0.0.1:8000/";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  public getDetails(){
    return this.http.get(endpoint);
  }
}
