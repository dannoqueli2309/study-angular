import { ItemCarrinho } from './shared/item-carrinho.model';
import { Oferta } from './shared/oferta.model';

class CarrinhoService {
  public itens: ItemCarrinho[] = [];
  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  public incluirItem(oferta: Oferta): void {
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    );
    let itemCarrinhoEncontrado = this.itens.find(
      (item) => item.id === itemCarrinho.id
    );

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1;
    } else {
      this.itens.push(itemCarrinho);
    }

    console.log('itens carrinho', this.itens);
  }

  public totalCarrinhoCompras(): number {
    let total: number = 0;
    this.itens.map(
      (item: ItemCarrinho) => (total = total + item.valor * item.quantidade)
    );
    return total;
  }

  public adicionarQuantidade(itemCarrinho: ItemCarrinho): void {
    console.log(itemCarrinho);

    let itemCarrinhoEncontrado = this.itens.find(
      (item) => item.id === itemCarrinho.id
    );

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1;
    }
  }

  public diminuindoQuantidade(itemCarrinho: ItemCarrinho): void {
    console.log(itemCarrinho);

    let itemCarrinhoEncontrado = this.itens.find(
      (item) => item.id === itemCarrinho.id
    );

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade -= 1;

      if (itemCarrinhoEncontrado.quantidade === 0) {
        const qtdElementRemoved = 1;
        this.itens.splice(
          this.itens.indexOf(itemCarrinhoEncontrado),
          qtdElementRemoved
        );
      }
    }
  }
  public limpaCarrinho():void{
    this.itens = [];
  }
}

export { CarrinhoService };
