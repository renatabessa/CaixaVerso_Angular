import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css'],
})
export class Checkout {
  carrinho$: Observable<any[]>;
  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.carrinho$ = this.store.select((state: any) => state.cart.itens);
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      endereco: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  finalizarPedido() {
    if (this.form.valid) {
      // Aqui você pode enviar os dados do pedido
      alert('Pedido finalizado!');
      this.store.dispatch({ type: '[Header] Clear Cart' });
      this.form.reset();
    }
  }
}
