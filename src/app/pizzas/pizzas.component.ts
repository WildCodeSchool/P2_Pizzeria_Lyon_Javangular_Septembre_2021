import {Component} from '@angular/core';
import {pizzaMock} from 'src/assets/mocks/pizzas.mock';
import {Pizza} from '../shared/model/pizza.model';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css'],
})
export class PizzasComponent {
  // Liste des pizzas
  pizzas: Pizza[];

  constructor() {
    this.pizzas = pizzaMock;
  }
}
