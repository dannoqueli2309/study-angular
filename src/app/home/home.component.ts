import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]// injetando o service e provendo para a class HomeComponente
})
export class HomeComponent implements OnInit {

  // O valor padrão de um atributo object é undefinid
  public ofertas: Oferta[];

  //adicionando uma service no construtor
  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {

    /// Neste caso o then ele recebe o que foi recuperado da response e no método then nós resolvemos o objeto retornada pela promese
    this.ofertasService.getOfertas().then((ofertas: Oferta[]) => {
      // neste caso estamos simulando um processo assincrono onde a a tela do app é  renderizada e apenas depois de 3 segundas as informações de ofertas são retornadas
      this.ofertas = ofertas
    }).catch((param: any) => {
      // tratando um reject de uma promisse
      
    });
  }

}
