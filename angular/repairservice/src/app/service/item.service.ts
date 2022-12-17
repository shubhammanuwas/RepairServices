import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }
  additem(item:any){
    return this.http.post('http://localhost:5000/services/add-item',item)
  }
  getItem(){
    return this.http.get('http://localhost:5000/services')
  }

}
