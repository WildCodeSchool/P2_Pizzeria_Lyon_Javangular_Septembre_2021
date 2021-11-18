import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  private baseProduit = 'https://world.openfoodfacts.org/api/v0/product/';
  constructor(private http: HttpClient) {}

  getProduit(EAN): Observable<any> {
    return this.http.get(this.baseProduit + EAN + '.json');
  }
}
