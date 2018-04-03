import { CanActivateViaAuthGuard } from "./_guard/canactivateauth.guard";
import { AuthModule } from "./auth/auth.module";

import { AppShellModule } from "./app-shell/app-shell.module";
import { FiliaisModule } from "./filiais/filiais.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { JwtInterceptor } from "./_helpers/jwt.interceptor";
import { FormsModule } from "@angular/forms";
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
