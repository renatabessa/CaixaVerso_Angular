import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, percentual:number):number {
    const valorComDesconto = value - (value * percentual / 100);
    return valorComDesconto;
  }

}
