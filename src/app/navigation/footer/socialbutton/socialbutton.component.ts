import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-socialbutton',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './socialbutton.component.html',
  styleUrl: './socialbutton.component.css'
})
export class SocialbuttonComponent {
  @Input() srcImage!: string;
  @Input() routePath!: string;
}
