import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { DiscountPipe } from '../../pipes/discount-pipe';


@Component({
  selector: 'app-card-produto',
  imports: [CommonModule, TruncatePipe, DiscountPipe],
  templateUrl: './card-produto.html',
  styleUrls: ['./card-produto.css'],
})
export class CardProduto {
  //Aqui você pode definir as propriedades do produto que serão exibidas no card
  @Input() produtoRecebido!: any;

   @Output() adicionar = new EventEmitter<any>()

   clicouComprar() {
     this.adicionar.emit(this.produtoRecebido);
   }
}

