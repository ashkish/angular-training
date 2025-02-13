import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { Injectable } from '@angular/core';

// Correctly applied @Injectable decorator
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'https://fakestoreapi.com/products';

  constructor(private httpClient: HttpClient) {}

  getProduct(): Observable<Product[]> {
    // console.log(this.httpClient.get<any>("https://jsonplaceholder.typicode.com/todos"));
    return this.httpClient.get<Product[]>(this.url);
  }
}
