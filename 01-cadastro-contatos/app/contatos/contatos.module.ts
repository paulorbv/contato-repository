import { ContatoDetalheComponent } from './contato-detalhe.component';
import { ContatoRoutingModule } from './contato-routing.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import { ContatosListaComponent } from './contatos-lista.component';

@NgModule({
    imports: [CommonModule,
              ContatoRoutingModule
              ],    
    declarations: [
        ContatosListaComponent,
        ContatoDetalheComponent 
    ],
    exports:[
        ContatosListaComponent,
        ContatoDetalheComponent
    ]    
})

export class ContatosModule {

}