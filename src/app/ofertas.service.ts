import { Oferta } from './shared/oferta.model';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'

import { map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
// O decorator @injetable é usado para injetar serviços dentro de outro serviço

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) {
    }


    public getOfertas(): Promise<Oferta[]> {

        // Esse primeira chama retorna um observable
        // vamos alterar para promise para fins didaticos
        return this.http.get<Oferta[]>(`${environment.HTTP_PATH}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta) => resposta);
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get<Oferta[]>(`${environment.HTTP_PATH}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta) => resposta);
    }

    public getOfertasPorId(id: number): Promise<Oferta> {
        return this.http.get<Oferta[]>(`${environment.HTTP_PATH}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta) => resposta[0]);
    }

    public getComoUsarOfertasPorId(id: number): Promise<string> {
        return this.http.get(`${environment.HTTP_PATH}/como-usar?id=${id}`)
        .toPromise()
        .then((respostas:Object) => respostas[0].descricao);
    }

    public getOndeFicaPorId(id: number): Promise<string> {
        return this.http.get(`${environment.HTTP_PATH}/onde-fica?id=${id}`)
        .toPromise()
        .then((respostas:Object) => respostas[0].descricao);
    }

    public pesquisaOfertas(termo: string):Observable<Oferta[]>{

        // Busca por aproximação
        return this.http.get<Oferta[]>(`${environment.HTTP_PATH}/ofertas?descricao_oferta_like=${termo}`)
        .pipe(retry(10), map((resposta) => resposta));
    }

}