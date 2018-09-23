import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { LoginComponent } from './security/login/login.component';
import { NavbarTopComponent } from './menus/navbar-top/navbar-top.component';
import { NavbarBottomComponent } from './menus/navbar-bottom/navbar-bottom.component';
import { SearchComponent } from './search/search.component';
import { ModalConfirmComponent } from './security/modal-confirm/modal-confirm.component';
import { ModalUserOptionComponent } from './user/modal-user-option/modal-user-option.component';
import { HomeComponent } from './home/home.component';
import { PetViewComponent } from './pet/pet-view/pet-view.component';
import { PetAddEditComponent } from './pet/pet-add-edit/pet-add-edit.component';
import { PetInfoComponent } from './pet/pet-info/pet-info.component';
import { PetFavoritesComponent } from './pet/pet-favorites/pet-favorites.component';
import { PetMyListComponent } from './pet/pet-my-list/pet-my-list.component';
import { UserAddEditComponent } from './user/user-add-edit/user-add-edit.component';

import {
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatGridListModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatCardModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatSnackBarModule
} from '@angular/material';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarTopComponent,
    NavbarBottomComponent,
    SearchComponent,
    ModalConfirmComponent,
    ModalUserOptionComponent,
    HomeComponent,
    PetViewComponent,
    PetAddEditComponent,
    PetInfoComponent,
    PetFavoritesComponent,
    PetMyListComponent,
    UserAddEditComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatExpansionModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
