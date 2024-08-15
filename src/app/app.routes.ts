import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { UserDetailesComponent } from './user-detailes/user-detailes.component';

export const routes: Routes = [
  {
    path:'' , component: CardsContainerComponent
  },
  {
    path:'user-details/:id' , component:UserDetailesComponent,
  }
];
