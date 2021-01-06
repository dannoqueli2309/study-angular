import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Pedido } from './shared/pedido.model';
@Injectable()
export class OrdemCompraService {
  constructor(private http: HttpClient) {}
  public efetivaCompra(pedido: Pedido): Observable<number> {
    console.log('chegamos até aqui!', 'o pedido  é esse', pedido);

    return this.http.post(`${environment.HTTP_PATH}/pedidos`, pedido)
    .pipe(map((response: any) => {
        return response.id
      })
    );
  }
}
