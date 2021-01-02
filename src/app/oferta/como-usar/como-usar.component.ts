import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../ofertas.service'
@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  howUse:string = "";

  constructor(private route: ActivatedRoute, private service: OfertasService) {

  }

  ngOnInit(): void {
    this.service.getComoUsarOfertasPorId(this.route.parent.snapshot.params['id'])
      .then((resposta: string) => {
        console.log(resposta);
        this.howUse = resposta;
      });
  }

}
