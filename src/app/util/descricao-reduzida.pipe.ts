import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

//// Para que o anguular entenda que você está usando um pipe
////você precisa assinar a sua classe com a função decoradora @Pipe.

///// Encadeando multiples pipes

@Pipe({
  name: 'desricaoReduzida',
})
export class DescricaoReduzida implements PipeTransform {
  transform(
    text: string,
    posicaoInicial: number | 0,
    posicaoParaTruncar: number
  ): string {
    if (text.length > posicaoParaTruncar) {
      return text.substr(posicaoInicial, posicaoParaTruncar) + '...';
    }
    return text;
  }
}
