import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../ingreso/page/login/login.component';
import { RegistroComponent } from '../ingreso/page/registro/registro.component';

const routes: Routes = [
    {path:'Login',component: LoginComponent},
    {path:'Registro',component: RegistroComponent},
    {path:'', redirectTo: 'Login', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresoRoutingModule { }
