  import { Component, inject, OnInit } from '@angular/core';
  import { FormControl } from '@angular/forms';
import { CardProduto } from '../card-produto/card-produto';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product';
import { Store } from '@ngrx/store';
import { addToCart } from '../../store/cart.actions';

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto, ReactiveFormsModule],
  templateUrl: './lista-produtos.html',
  styleUrls: ['./lista-produtos.css'],
})
export class ListaProdutos implements OnInit {
  //Injetando o serviço ProductService para acessar os dados dos produtos
  productService = inject(ProductService);
  private store = inject(Store);
  produtos: any[] = [];
  produtosFiltrados: any[] = [];
  carregando = true;
  busca = new FormControl('');

  //Obtendo a lista de produtos do serviço
  ngOnInit(): void {
    console.log('Obtendo produtos...');
    this.productService.getProducts().subscribe({
      next: (dados: any) => {
        this.produtos = dados;
        this.produtosFiltrados = dados;
        this.carregando = false;
      },
      error: (erro) => {
        console.error(erro);
        this.carregando = false;
        alert("Erro ao acessar o produto")
      },
    });
    this.busca.valueChanges.subscribe(valor => {
      this.filtrarProdutos(valor ?? '');
    });
  }

  filtrarProdutos(valor: string) {
    if (!valor) {
      this.produtosFiltrados = this.produtos;
    } else {
      const termo = this.normalizar(valor);
      this.produtosFiltrados = this.produtos.filter(produto => {
        const titulo = this.normalizar(produto.title || '');
        const descricao = this.normalizar(produto.description || '');
        return titulo.includes(termo) || descricao.includes(termo);
      });
    }
  }

  normalizar(texto: string): string {
    return texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  receberProduto(produto: any) {
    console.log('Produto adicionado:', produto.title);
    this.store.dispatch(addToCart({product: produto}));
  }
}