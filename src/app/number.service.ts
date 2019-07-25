import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NumberService {
 magicNumber = 0;
  constructor(private http: HttpClient) { }

  getRandomNumber(){
    return this.http.get('https://shielded-inlet-65967.herokuapp.com/');
  
  }
}
