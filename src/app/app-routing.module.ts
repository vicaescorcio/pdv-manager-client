import { FiliaisComponent } from './filiais/filiais.component';
import { CanActivateViaAuthGuard } from './_guard/canactivateauth.guard';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: FiliaisComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'login', component: AuthComponent }
  // otherwise redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
