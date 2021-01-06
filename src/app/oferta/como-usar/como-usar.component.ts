import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';
@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService],
})
export class ComoUsarComponent implements OnInit {
  howUse: string = '';

  constructor(private route: ActivatedRoute, private service: OfertasService) {}

  ngOnInit(): void {
    this.route.parent.params.subscribe((parametros: Params) => {
      this.service
        .getComoUsarOfertasPorId(parametros.id)
        .then((resposta: string) => {
          console.log(resposta);
          this.howUse = resposta;
        });
    });
  }
}
