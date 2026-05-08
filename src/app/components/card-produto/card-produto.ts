import { Component, inject, Input } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { Store } from '@ngrx/store';
import { addToCart } from '../../store/cart.actions';
import { ICartItem, ICartState } from '../../models/cart.model';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-card-produto',
  imports: [CommonModule, TruncatePipe, DiscountPipe, RouterLink],
  templateUrl: './card-produto.html',
  styleUrls: ['./card-produto.css'],
})
export class CardProduto {
  //Aqui você pode definir as propriedades do produto que serão exibidas no card
  @Input() produtoRecebido!: IProduct; // a exclamação significa confia que vai chegar

    private store = inject(Store<{ cart: ICartState }>) //injetando o carrinho

   clicouComprar() {
     const item: ICartItem = { product: this.produtoRecebido, quantity: 1 };
     this.store.dispatch(addToCart({ product: item }));
   }
}

