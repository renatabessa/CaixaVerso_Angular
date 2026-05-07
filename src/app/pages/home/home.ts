import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ListaProdutos } from '../../components/lista-produtos/lista-produtos';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [ListaProdutos],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  private router = inject(Router);
  private navSub?: Subscription;
  produtosKey = 0;

  ngOnInit(): void {
    this.navSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.router.url === '/') {
        this.produtosKey++;
      }
    });
  }

  ngOnDestroy(): void {
    this.navSub?.unsubscribe();
  }
}
