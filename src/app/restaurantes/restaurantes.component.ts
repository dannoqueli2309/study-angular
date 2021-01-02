import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[];

  public dataTest: any = new Date(2017,8,30);

  constructor(private ofertaService: OfertasService) {

  }

  ngOnInit(): void {
    this.ofertaService.getOfertasPorCategoria("restaurante")
    .then((ofertas: Oferta[]) => {
      this.ofertas = ofertas;
    });
  }

}
