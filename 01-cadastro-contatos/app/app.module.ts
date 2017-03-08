import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatosModule } from './contatos/contatos.module';

@NgModule({
    imports: [BrowserModule,
              ContatosModule,
              AppRoutingModule],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}