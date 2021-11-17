import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  private baseProduit = 'https://world.openfoodfacts.org/api/v0/product/[].json';
  constructor(private http: HttpClient) {}

  getProduit(): Observable<any> {
    return this.http.get(this.baseProduit);
  }
}
