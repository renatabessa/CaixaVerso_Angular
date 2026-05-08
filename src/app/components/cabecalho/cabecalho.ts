import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { clearCart } from '../../store/cart.actions';
import { ICartState } from '../../models/cart.model';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';


@Component({
  selector: 'app-cabecalho',
  imports: [CommonModule],
  templateUrl: './cabecalho.html',
  styleUrls: ['./cabecalho.css'],
})
export class Cabecalho {

 // cartService = inject(Cart);

 private store = inject(Store<{cart: ICartState}>);
  private router = inject(Router);

 //store.select retorna um Observable
 carrinho$ = this.store.select(state => state.cart.itens);
 totalItens$ = this.carrinho$.pipe(
   map((itens: ICartState['itens']) => itens.reduce((acc: number, item: { quantity: number }) => acc + item.quantity, 0))
 );
  
 //carrinho$ = this.store.select(state => {
   // console.log("Estado do Store no cabeçalho:", state);
    //return state.cart.itens;
    //});
  esvaziarCarrinho(){
    this.store.dispatch(clearCart());
  }

  finalizarCompra(){
    this.router.navigate(['/checkout']);
  }

}
