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
  datas: any;
  infos: string;
  constructor(private foodsService: FoodsService, private codeBarreService: CodeBarreService) {}

  ngOnInit(): void {
    this.codeBarreService.getAllCodeBarre().subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  getInfo(ingredient: string): void {
    // console.log(ingredient);
    // console.log(this.foodsService.getProduit(this.getEAN(ingredient)));
    this.foodsService.getProduit(this.getEAN(ingredient)).subscribe((data) => {
      this.datas = data;
      this.infos = this.datas.product.countries;
      Swal.fire("Pays d'origine : " + this.infos);
    });
  }

  getEAN(ingredient: string): string {
    const indexOfIngredient = this.ingredients.findIndex((s) => s.nom == ingredient);
    return this.ingredients[indexOfIngredient].EAN;
  }
}
