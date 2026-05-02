import { Component, signal } from '@angular/core';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { Rodape } from './components/rodape/rodape';
import { ListaProdutos } from './components/lista-produtos/lista-produtos';

@Component({
  selector: 'app-root',
  imports: [Cabecalho, Rodape, ListaProdutos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lojinha-angular');
}
