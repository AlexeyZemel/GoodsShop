import {Component, Input} from '@angular/core';
import {Product} from "../../../services/fake-store.service";
import {CurrencyPipe, NgStyle} from "@angular/common";
import {Router} from "@angular/router";
import {DataTransitionService} from "../../../services/data-transition.service";


@Component({
  selector: 'app-similar-item',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgStyle
  ],
  templateUrl: './similar-item.component.html',
  styleUrl: './similar-item.component.css'
})
export class SimilarItemComponent {
  @Input() product!: Product;

  constructor(private router: Router, private dataService: DataTransitionService) {
  }

  selectProduct(product: Product) {
    this.dataService.selectProduct(product);
    this.router.navigate(['/card']);
  }



}
