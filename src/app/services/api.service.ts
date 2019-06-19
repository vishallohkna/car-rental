import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  public httpOptions: any;

  constructor(private http: HttpClient) {
  	this.setHeaders();
  }

  setHeaders(){
    this.httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      })
    };
  }

  getCarData(){
  	return this.http.get('https://api.sheety.co/311576ae-321a-43e3-9a5b-61b3ac373d85', this.httpOptions)
  }

}
