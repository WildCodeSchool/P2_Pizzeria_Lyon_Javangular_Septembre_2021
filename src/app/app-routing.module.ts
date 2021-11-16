import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {PizzasComponent} from './pizzas/pizzas.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'pizzas',
    component: PizzasComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
