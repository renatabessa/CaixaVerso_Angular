import { Component, signal } from '@angular/core';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { Rodape } from './components/rodape/rodape';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Cabecalho, Rodape, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lojinha-angular');
}
