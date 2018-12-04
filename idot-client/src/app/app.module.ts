import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule,  } from '@angular/common/http';
import { JsonpModule, Jsonp, Response } from '@angular/http';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TextMaskModule } from 'angular2-text-mask';

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
import { NotFoundComponent } from './not-found/not-found.component';
import { NotificationComponent } from './notification/notification.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';

import {
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
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
  MatSnackBarModule,
  MatDatepickerModule,
  MAT_DATE_LOCALE,
  MatNativeDateModule,
} from '@angular/material';



import { AuthInterceptor } from './security/auth.interceptor';
import { LoginService } from './security/login/login.service';
import { LoggedInGuard } from './security/loggedin.guard';
import { PetService } from './pet/pet.service';
import { UserService } from './user/user.service';
import { NotificationService } from './notification/notification.service';
import { SearchService } from './search/search.service';
import { CepPipe } from './pipes/cep.pipe';


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
    NotFoundComponent,
    NotificationComponent,
    ModalDeleteComponent,
    UserViewComponent,
    UserInfoComponent,
    CepPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JsonpModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
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
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TextMaskModule
  ],
  providers: [
    LoginService,
    LoggedInGuard,
    UserService,
    PetService,
    SearchService,
    NotificationService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalUserOptionComponent, ModalDeleteComponent]
})
export class AppModule {}
