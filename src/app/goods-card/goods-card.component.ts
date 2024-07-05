import {Component, Input} from '@angular/core';
import { Product } from "../services/fake-store.service";
import {CurrencyPipe, NgStyle} from "@angular/common";

@Component({
  selector: 'app-goods-card',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgStyle
  ],
  templateUrl: './goods-card.component.html',
  styleUrl: './goods-card.component.css'
})
export class GoodsCardComponent {
  @Input() prod!: Product;

}
