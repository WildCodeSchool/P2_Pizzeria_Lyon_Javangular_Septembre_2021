import {Component, Input, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {Pizza} from '../../shared/model/pizza.model';

import {FoodsService} from '../foods.service';
import {CodeBarreService} from '../code-barre.service';
import {Ingredient} from 'src/shared/model/ingredient.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
})
export class PizzaComponent implements OnInit {
  @Input() pizza: Pizza;
  ingredients: Ingredient[];

  constructor(private foodsService: FoodsService, private codeBarreService: CodeBarreService) {}

  ngOnInit(): void {
    this.codeBarreService.getAllCodeBarre().subscribe((ingredients: Ingredient[]) => {
      console.log(ingredients);
      this.ingredients = ingredients;
    });
  }

  getInfo(ingredient: string): void {
    console.log(ingredient);
    console.log(this.foodsService.getProduit(this.getEAN(ingredient)));
  }

  getEAN(ingredient: string) {
    const indexOfIngredient = this.ingredients.findIndex((s) => s.nom == ingredient);
    return this.ingredients[indexOfIngredient].EAN;
  }
}
