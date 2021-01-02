import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, of, Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers:[OfertasService]
})
export class TopoComponent implements OnInit {
  
  public ofertas: Observable<Oferta[]>

  public ofertaArray: Oferta[];
  
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private service: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa
    .pipe(
      // o debounce time serve para fazer requisições depois de um determinada quantidade de tempo 
      debounceTime(1000),
      // distinctUntil change serve para reduzir o numero de requisições feitas para o servidor se a requisição for exatamente como a anterior ele não efetua a chamada para srvidor
      distinctUntilChanged(),
      switchMap((termo:string)=>{
        // serve para adicionar logica no momento em  que um observable é disparado 
        console.log("Requisição para a API")
        
        if(termo.trim() === ''){
          return of([]);
        }
        
        return this.service.pesquisaOfertas(termo);
    }),catchError((err)=>{
      console.log(err);
      return of([]);
    }))
    
    this.ofertas.subscribe((ofertas:Array<Oferta>)=>
    this.ofertaArray = ofertas);
  }

  /// recebe um evento que é digitado no input
  // public pesquisa(event:Event): void {
  //   console.log((<HTMLInputElement>event.target).value);
  // }

  public pesquisa(termoDaPesquisa:string): void {
    // console.log(termoDaPesquisa);

    // this.ofertas = this.service.pesquisaOfertas(termoDaPesquisa);

    // this.ofertas.subscribe((ofertas:Oferta[])=> console.log(ofertas),
    // (errorHttp)=>console.log(errorHttp),
    // ()=> console.log('Fluxo de eventos completo'));
    console.log('keyup caracter:',termoDaPesquisa);
    this.subjectPesquisa.next(termoDaPesquisa)
  }
}
