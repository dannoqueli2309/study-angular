import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Observable, Observer, Subscription } from 'rxjs';

import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  // quando ele construir o componente de routeamento do componente 

  // // Para guardar o valor do meu subscribe
  // private tempoObservableSubscription: Subscription;

  // private meuObservableTest: Subscription;

  oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.ofertaService.getOfertasPorId(this.route.snapshot.params['id']).then((oferta: Oferta) => {
      this.oferta = oferta;
      console.log(this.oferta);
    })

    // // O Activete route fica observando eternamente o objeto observado 
    // // logo a instrução complete nunca é chamado
    // this.route.params.subscribe(
    //   (parameters: any) => console.log(parameters),
    //   (error: any) => console.log(error),
    //   () => console.log('Processamento finalizado')
    // )

    // //Maria Beatriz de Almeida · Aula 140 · há 5 meses
    // // Atualmente (estou falando em Julho de 2020) não é necessário importar Observable e Interval. Hoje usa-se o interval diretamente, então o seu código deverá ficar assim:
    // // })
    // let tempo = interval(2000);

    // this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
    //   console.log(intervalo);
    // })

    // // Observable que será observado 
    // let meuObservable = Observable.create((observer: Observer<number>) => {
    //   observer.next(2);// dispara um evennto no fluxo de eventos do meu observavel
    //   observer.next(3);
    //   observer.error('Algum erro aconteceu na stream de eventos')
    //   // caso evento sejá lançado ele será ignora
    // });

    // //Observable que será o observador

    // // função
    // //erro
    // //conclusão
    // this.meuObservableTest = meuObservable.subscribe(
    //   (resultado: number) => console.log(resultado * 10),
    //   (error: String) => console.log(error),
    //   () => console.log('Stream de eventos foi finalizado')
    // )
  }

  ngOnDestroy() {
  }


}
