import { Component } from '@angular/core';
import {FbuttonComponent} from "./fbutton/fbutton.component";
import {SocialbuttonComponent} from "./socialbutton/socialbutton.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    FbuttonComponent,
    SocialbuttonComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
