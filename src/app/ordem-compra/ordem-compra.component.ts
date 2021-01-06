import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { FormasPagamento } from '../shared/forma.pagamento';
import {Pedido} from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService],
})
export class OrdemCompraComponent implements OnInit {
  public idPedidocompra: number;
  //pedido
  public pedido: Pedido = new Pedido("","","","");

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  //Controles de validacaoes

  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  // Estados primitivos dos campos (pristine)

  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;
  public complementoEstadoPrimitivo: boolean = true;
  public formaPagamentoEstadoPrimitivo: boolean = true;

  // conntrolar botão do constrole de estado
  public formEstado: string = 'disabled';

  constructor(private ordemCompraService: OrdemCompraService) {}

  ngOnInit(): void {
    //this.OrdemCompraService.efetivaCompra();
  }

  public atualizaEndereco(novoEndereco: string): void {
    this.endereco = novoEndereco;

    console.log(this.endereco);

    this.enderecoEstadoPrimitivo = false;

    // se a string for maior que 3
    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
    this.habilitaForm();
  }

  public atualizaNumero(novoNumero: string): void {
    this.numero = novoNumero;

    console.log(this.numero);

    this.numeroEstadoPrimitivo = false;

    if (this.numero != '') {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
    this.habilitaForm();
  }

  public atualizaComplemento(novoComplemento: string): void {
    this.complemento = novoComplemento;

    console.log(this.complemento);

    this.complementoEstadoPrimitivo = false;

    if (this.complemento != '') {
      this.complementoValido = true;
    }

    this.habilitaForm();
  }

  public atualizaFormaPagamento(novoPagamento: string): void {
    this.formaPagamento = novoPagamento;

    console.log(this.formaPagamento);

    this.formaPagamentoEstadoPrimitivo = false;

    if (this.formaPagamento != '') {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
    this.habilitaForm();
  }

  public habilitaForm(): void {
    if (
      this.enderecoValido == true &&
      this.numeroValido == true &&
      this.formaPagamentoValido == true
    ) {
      this.formEstado = '';
    } else {
      this.formEstado = 'disabled';
    }
  }

  public confirmaCompra(): void {
    
    this.pedido.endereco = this.endereco;
    this.pedido.complemento = this.complemento;
    this.pedido.numero = this.numero;
    this.pedido.formaDePagamento = this.formaPagamento;

    this.ordemCompraService
    .efetivaCompra(this.pedido)
    .subscribe((idPedido: number)=>{
      console.log(idPedido)
      return this.idPedidocompra = idPedido;
    });
  }
}
