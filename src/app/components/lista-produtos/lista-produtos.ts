import { Component, inject, OnInit } from '@angular/core';
import { CardProduto } from '../card-produto/card-produto';
import { ProductService } from '../../services/product';
import { Store } from '@ngrx/store';
import { addToCart } from '../../store/cart.actions';

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos implements OnInit {
  //Injetando o serviço ProductService para acessar os dados dos produtos
  productService = inject(ProductService);
  private store = inject(Store);
  produtos: any[] = [];
  carregando = true;

  //Obtendo a lista de produtos do serviço
  ngOnInit(): void {
    console.log('Obtendo produtos...');
    //simulando a chamada de uma API para obter os produtos
    this.productService.getProducts().subscribe({
      next: (dados: any) => {
        this.produtos = dados;
        this.carregando = false;
      },

      error: (erro) => {
        console.error(erro);
        this.carregando = false;
        alert("Erro ao acessar o produto")
      },
    });
  }

  receberProduto(produto: any) {
    console.log('Produto adicionado:', produto.title);
    this.store.dispatch(addToCart({product: produto}));
  }
}
