import {Component, Input} from '@angular/core';
import {Pizza} from '../../shared/model/pizza.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
})
export class PizzaComponent {
  @Input() pizza: Pizza;
  getInfo(ingredient: string) {
    console.log(ingredient);
  }
}
