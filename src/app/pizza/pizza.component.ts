import {Component, Input, OnInit} from '@angular/core';
import {from} from 'rxjs';
import Swal from 'sweetalert2';
import {Pizza} from '../../shared/model/pizza.model';
import {FoodsService} from '../foods.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
})
export class PizzaComponent implements OnInit {
  @Input() pizza: Pizza;
  produits: any[] = [];
  constructor(private FoodsService: FoodsService) {}
  ngOnInit(): void {
    this.FoodsService.getProduit().subscribe(
      (response) => {
        console.log(response);

        return (this.produits = response.produits);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getInfo(ingredient: string): void {
    console.log(ingredient);
  }
}
