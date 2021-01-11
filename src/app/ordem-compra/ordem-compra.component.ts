import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';
import { CarrinhoService } from '../carrinho.service';
import { ItemCarrinho } from '../shared/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService],
})
export class OrdemCompraComponent implements OnInit {
  public idPedidoCompra: number;
  public itensCarrinho: ItemCarrinho[] = [];

  public formulario: FormGroup = new FormGroup({
    endereco: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(120),
    ]),
    numero: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20),
    ]),
    formaPagamento: new FormControl(null, [Validators.required]),
    complemento: new FormControl(null),
  });
  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens();
    console.log('Quantidades de Itens no carrinho', this.itensCarrinho);
  }

  public confirmarCompra(): void {
    if (this.formulario.status === 'INVALID') {
      this.formulario.get('endereco').markAsTouched();
      this.formulario.get('numero').markAsTouched();
      this.formulario.get('formaPagamento').markAsTouched();
      this.formulario.get('complemento').markAsTouched();
    } else {
      if (this.carrinhoService.exibirItens().length == 0) {
        alert('você não selecionou nenhum item!');
      } else {
        
        let pedido:Pedido = this.formulario.value;
        pedido.itensCarrinho = this.carrinhoService.exibirItens(); 

        this.ordemCompraService
          .efetivaCompra(pedido)
          .subscribe((idDoPedido) => {
            this.idPedidoCompra = idDoPedido;
            this.carrinhoService.limpaCarrinho();
          });
      }
    }
  }

  public adicionar(item: ItemCarrinho): void {
    this.carrinhoService.adicionarQuantidade(item);
  }

  public diminuindo(item: ItemCarrinho): void {
    this.carrinhoService.diminuindoQuantidade(item);
  }
}
