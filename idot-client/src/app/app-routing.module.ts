
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
import { UserAddEditComponent } from './user/user-add-edit/user-add-edit.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { UserInfoComponent } from './user/user-info/user-info.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  { path: 'home', component: HomeComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'login/:to', component: LoginComponent },

  { path: 'usuario-fisico', component: UserAddEditComponent },
  { path: 'usuario-fisico/:id', component: UserAddEditComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  { path: 'usuario-juridico', component: UserAddEditComponent },
  { path: 'usuario-juridico/:id', component: UserAddEditComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  { path: 'usuario-info/:id', component: UserInfoComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },

  { path: 'meus-pets', component: PetMyListComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  { path: 'pet', component: PetAddEditComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  { path: 'pet/:id', component: PetAddEditComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  { path: 'pet-info/:id', component: PetInfoComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
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
