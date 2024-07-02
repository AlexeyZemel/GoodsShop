import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {RouterLink} from "@angular/router";
import {ButtonComponent} from "./button/button.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink, FormsModule, ButtonComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  submitForm(form: NgForm) {
    console.log(form.value.textInput);
  }
}
