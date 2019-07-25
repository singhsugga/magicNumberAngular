import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NumberService {
 magicNumber = 0;
  constructor(private http: HttpClient ) { }

  getRandomNumber(){
    return this.http.get(environment.apiUrl);
  
  }
}
