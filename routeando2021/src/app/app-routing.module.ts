import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidosComponent } from './general/page/bienvenidos/bienvenidos.component';
import { ContactoComponent } from './general/page/contacto/contacto.component';
import { PageNotFoundComponent } from './general/page/page-not-found/page-not-found.component';
import { LoginComponent } from './ingreso/page/login/login.component';
import { RegistroComponent } from './ingreso/page/registro/registro.component';

const routes: Routes = [
  {path:'Bienvenidos',component: BienvenidosComponent},
  {path:'Contacto',component: ContactoComponent},
  /* {path:'Ingreso/Login',component: LoginComponent},
  {path:'Ingreso/Registro',component: RegistroComponent}, */
  /* {path:'Ingreso',   
                  children:[
                    {path:'Login',component: LoginComponent},
                    {path:'Registro',component: RegistroComponent},
                    {path:'', redirectTo: 'Login', pathMatch: 'full'}
                  ]}, */
  {path:'Ingreso', loadChildren: () => import('./ingreso/ingreso.module').then(m => m.IngresoModule)},
  {path:'', redirectTo:'Bienvenidos', pathMatch:'full'},
  { path: 'ingreso', loadChildren: () => import('./ingreso/ingreso.module').then(m => m.IngresoModule) },
  {path:'**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
