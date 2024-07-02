import { Component, Input } from '@angular/core';
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-fbutton',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './fbutton.component.html',
  styleUrl: './fbutton.component.css'
})
export class FbuttonComponent {
@Input() buttonText!: string;
@Input() routePath!: string;
}
