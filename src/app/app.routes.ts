import { Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {CartComponent} from "./pages/cart/cart.component";
import {CardPageComponent} from "./pages/card-page/card-page.component";

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'cart', component: CartComponent },
  { path: 'card', component: CardPageComponent }
];
