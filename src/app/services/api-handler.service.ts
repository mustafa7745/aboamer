import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {
  private url = "https://jsonplaceholder.typicode.com/posts"

  
  // constructor(private http: HttpClient) { }

  // fetchDataFrpApi(){
  //   return this.http.get(this.url)
  // }
}
