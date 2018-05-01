import { ParametroModule } from './parametro/parametro.module';
import { RecursoModule } from './recurso/recurso.module';
import { BandeiraModule } from './bandeira/bandeira.module';
import { PosModule } from './pos/pos.module';
import { PlanoModule } from './plano/plano.module';
import { AppShellModule } from './_helpers/app-shell/app-shell.module';
import { EmpregadoModule } from './empregado/empregado.module';
import { FinalizadoraModule } from './finalizadora/finalizadora.module';
import { ProdutoModule } from './produto/produto.module';
import { PdvModule } from './pdv/pdv.module';
import { CanActivateViaAuthGuard } from "./_guard/canactivateauth.guard";
import { AuthModule } from "./auth/auth.module";

import { FiliaisModule } from "./filiais/filiais.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { JwtInterceptor } from "./_helpers/jwt.interceptor";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppShellModule,
    FiliaisModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PdvModule,
    ProdutoModule,
    FinalizadoraModule,
    EmpregadoModule,
    PlanoModule,
    PosModule,
    BandeiraModule,
    RecursoModule,
    ParametroModule

  ],
  exports: [],
  providers: [
    CanActivateViaAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
