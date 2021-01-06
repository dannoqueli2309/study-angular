import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { ROUTES } from './app.router';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { registerLocaleData } from '@angular/common';
import localesPT from '@angular/common/locales/pt';
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
  ],
  imports: [
    BrowserModule,
    // è o module substituto da clas HttpModule
    HttpClientModule,
    ///Forroot(Rotas genericas) vs forchild
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
