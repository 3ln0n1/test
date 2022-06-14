import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './component/cliente/cliente.component';
import { FormClienteComponent } from './component/forms/form-cliente.component';
import { HttpClientModule } from '@angular/common/http';

import{Routes,RouterModule}from '@angular/router'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

const routes:Routes=[
  { path:'',redirectTo:'/clientes',pathMatch:'full'},
  {path:'clientes',component:ClienteComponent},
  {path:'formclientes',component:FormClienteComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    FormClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
