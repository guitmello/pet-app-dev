
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './security/loggedin.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './security/login/login.component';
import { PetFavoritesComponent } from './pet/pet-favorites/pet-favorites.component';
import { SearchComponent } from './search/search.component';
import { PetMyListComponent } from './pet/pet-my-list/pet-my-list.component';
import { PetAddEditComponent } from './pet/pet-add-edit/pet-add-edit.component';
import { PetInfoComponent } from './pet/pet-info/pet-info.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  { path: 'home', component: HomeComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'login/:to', component: LoginComponent },

  { path: 'meus-pets', component: PetMyListComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  { path: 'pet-novo-edicao', component: PetAddEditComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  { path: 'pet-novo-edicao/:id', component: PetAddEditComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  { path: 'pet-info', component: PetInfoComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  { path: 'favoritos', component: PetFavoritesComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },

  { path: 'pesquisar', component: SearchComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },

  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
