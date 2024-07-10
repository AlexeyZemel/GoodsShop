import { Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {CartComponent} from "./pages/cart/cart.component";

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'cart', component: CartComponent },
];
