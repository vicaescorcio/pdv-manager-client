import { NewEmpregadoComponent } from './new-empregado/new-empregado.component';
import { CanActivateViaAuthGuard } from './../_guard/canactivateauth.guard';
import { EmpregadosComponent } from "./empregados/empregados.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "empregados",
    component: EmpregadosComponent,
    canActivate:[CanActivateViaAuthGuard]
  },
  {
    path: "new-empregado",
    component: NewEmpregadoComponent,
    canActivate:[CanActivateViaAuthGuard]
  },
  {
    path: "new-empregado/:cc_emp",
    component: NewEmpregadoComponent,
    canActivate:[CanActivateViaAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpregadoRoutingModule {}
