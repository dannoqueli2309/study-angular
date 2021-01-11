import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';
import  CarrinhoService from '../carrinho.service'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService, CarrinhoService]
})
export class OrdemCompraComponent implements OnInit {
  public idPedidoCompra: number;

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
  constructor(private ordemCompraService: OrdemCompraService, 
    private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    console.log("Todos os itens: ",this.carrinhoService.exibirItens())
  }

  public confirmarCompra(): void {
    if (this.formulario.status === 'INVALID') {
      console.log('Formulario está inválido');

      this.formulario.get('endereco').markAsTouched();
      this.formulario.get('numero').markAsTouched();
      this.formulario.get('formaPagamento').markAsTouched();
      this.formulario.get('complemento').markAsTouched();
    } else {
      console.log('Formulario está valido');
      this.ordemCompraService
        .efetivaCompra(this.formulario.value)
        .subscribe((idDoPedido) => {
          console.log(idDoPedido);
          this.idPedidoCompra = idDoPedido;
        });
    }
  }
}
