import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { Store } from '@ngrx/store';
import { addToCart } from '../../store/cart.actions';



@Component({
  selector: 'app-card-produto',
  imports: [CommonModule, TruncatePipe, DiscountPipe],
  templateUrl: './card-produto.html',
  styleUrls: ['./card-produto.css'],
})
export class CardProduto {
  //Aqui você pode definir as propriedades do produto que serão exibidas no card
  @Input() produtoRecebido!: any; // a exclamação significa confia que vai chegar

    private store = inject(Store) //injetando o carrinho

   clicouComprar() {
     this.store.dispatch(addToCart({product: this.produtoRecebido}));
   }
}

