import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {
  /// Nesse caso nós estamos olhando as alterações do formulario e recuperando o formulario do HTML
  @ViewChild("formulario") public formulario: NgForm

  public idPedidoCompra: number;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }

  public confirmaCompra(){
    /// Os atributos pristine e dirty são estados do atributo do formulario 

    // O atributo pristine é para informar que o campo não foi alterado

    // O atributo dirty se o campo foi adicionado mesmo que ele seja excluido esse campo passa a ser dirty

    // O angular atribui algumas classes CSS para que possa ser alterado na folha de estilo CSS
    ///ng-invalid, ng-valid, 
    console.log(this.formulario);
    this.ordemCompraService.efetivaCompra(this.formulario.form.value)
    .subscribe((idPedido)=>{
      console.log("o id do pedido é esse:",idPedido)
      this.idPedidoCompra = idPedido;
    })
  }
}
