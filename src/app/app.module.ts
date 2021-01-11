import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localesPT from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

/// Não devemos fazer importaçao default dentro do app module provoca uma instacia da classe logo o angular vai acusar um erro 

//Sempre importar algo dentro de app module use a sintaxe de distribution assigment

import { CarrinhoService } from '../app/carrinho.service' 

import { AppComponent } from './app.component';
import { ROUTES } from './app.router';
import { DiversaoComponent } from './diversao/diversao.component';
import { HomeComponent } from './home/home.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OfertaComponent } from './oferta/oferta.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TopoComponent } from './topo/topo.component';
import { DescricaoReduzida } from './util/descricao-reduzida.pipe';

registerLocaleData(localesPT);

@NgModule({
  declarations: [
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    AppComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida,
    OrdemCompraSucessoComponent,
    OrdemCompraComponent,
  ],
  imports: [
    BrowserModule,
    // è o module substituto da clas HttpModule
    HttpClientModule,
    ///Forroot(Rotas genericas) vs forchild
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [CarrinhoService, {provide: LOCALE_ID,useValue:'pt-Br'}],
  bootstrap: [AppComponent],
})
export class AppModule {}
