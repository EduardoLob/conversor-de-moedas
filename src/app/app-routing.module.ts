import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Page401Component } from './page401/page401.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'home', component:HomeComponent},
  {path: 'cadastro', component:CadastroComponent},
  {path: '**', component:Page401Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }