import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ingredient} from 'src/shared/model/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class CodeBarreService {
  private service: HttpClient;
  constructor(param_service: HttpClient) {
    this.service = param_service;
  }
  public getAllCodeBarre(): Observable<Ingredient[]> {
    return this.service.get<Ingredient[]>('/assets/api/ingredients.json');
  }
}
