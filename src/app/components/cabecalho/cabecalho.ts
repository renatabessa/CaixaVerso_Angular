import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState, clearCart } from '../../store/cart.actions';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cabecalho',
  imports: [CommonModule],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
})
export class Cabecalho {

 // cartService = inject(Cart);

 private store = inject(Store<{cart: CartState}>);

 //store.select retorna um Observable
 carrinho$ = this.store.select(state => state.cart.itens);
  
 //carrinho$ = this.store.select(state => {
   // console.log("Estado do Store no cabeçalho:", state);
    //return state.cart.itens;
    //});
  esvaziarCarrinho(){
    this.store.dispatch(clearCart());
  }

}
