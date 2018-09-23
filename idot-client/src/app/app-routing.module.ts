import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './security/login/login.component';
import { PetFavoritesComponent } from './pet/pet-favorites/pet-favorites.component';
import { SearchComponent } from './search/search.component';
import { PetMyListComponent } from './pet/pet-my-list/pet-my-list.component';
import { PetAddEditComponent } from './pet/pet-add-edit/pet-add-edit.component';
import { PetInfoComponent } from './pet/pet-info/pet-info.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:to', component: LoginComponent },

  { path: 'meus-pets', component: PetMyListComponent },
  { path: 'pet-novo-edicao', component: PetAddEditComponent },
  { path: 'pet-info', component: PetInfoComponent },
  { path: 'favoritos', component: PetFavoritesComponent },

  { path: 'pesquisar', component: SearchComponent },

  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
