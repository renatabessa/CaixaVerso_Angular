import { Component, inject } from '@angular/core';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-cabecalho',
  imports: [],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
})
export class Cabecalho {

  cartService = inject(Cart);

}
