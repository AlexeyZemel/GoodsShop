import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {RouterLink} from "@angular/router";
import {ButtonComponent} from "./button/button.component";
import {CartItem, CartService} from "../../services/cart.service";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink, FormsModule, ButtonComponent, NgStyle
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cartQuantity: number = 0;

  constructor(private cartService: CartService) { }
  ngOnInit() {
    this.cartService.cartItems$.subscribe((data: CartItem[]) => {
      this.cartQuantity = this.cartService.getCartQuantity();
    });
  }

  ngOnCheck () : void {
    this.cartQuantity = this.cartService.getCartQuantity();
  }

  submitForm(form: NgForm) {
    console.log(form.value.textInput);

  }
}
