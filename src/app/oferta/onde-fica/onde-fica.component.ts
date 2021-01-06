import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  whereIs: string = ""

  constructor(private route: ActivatedRoute, private service: OfertasService) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((parametros: Params) => {
    this.service.getOndeFicaPorId(parametros.id)
      .then((resposta: string) => {
        console.log(resposta);
        this.whereIs = resposta;
      });
  })
  };
}
