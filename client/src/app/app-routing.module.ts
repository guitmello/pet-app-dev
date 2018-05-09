import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PesquisarComponent } from './pesquisar/pesquisar.component';
import { PetInfoComponent } from './pet-info/pet-info.component';
import { MeusPetsComponent } from './meus-pets/meus-pets.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { ChatComponent } from './chat/chat.component';
import { AddPjuridicaComponent } from './add-pjuridica/add-pjuridica.component';
import { AddPfisicaComponent } from './add-pfisica/add-pfisica.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { AppComponent } from './app.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'externalUrl',
    component: AppComponent,
    resolve: {
      url: 'externalUrlRedirectResolver'
    },
    data: {
      externalUrl: '../site/site-institucional.html'
    }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'add-pet',
    component: AddPetComponent
  },
  {
    path: 'add-pfisica',
    component: AddPfisicaComponent
  },
  {
    path: 'add-pjuridica',
    component: AddPjuridicaComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'favoritos',
    component: FavoritosComponent
  },
  {
    path: 'meus-pets',
    component: MeusPetsComponent
  },
  {
    path: 'pesquisar',
    component: PesquisarComponent
  },
  {
    path: 'pet-info',
    component: PetInfoComponent
  },
  {
    path: 'edit-pet',
    component: EditPetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
