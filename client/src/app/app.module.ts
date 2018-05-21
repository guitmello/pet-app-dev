import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServerModule } from '@angular/platform-server';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { AddPfisicaComponent } from './add-pfisica/add-pfisica.component';
import { AddPjuridicaComponent } from './add-pjuridica/add-pjuridica.component';
import { ChatComponent } from './chat/chat.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MeusPetsComponent } from './meus-pets/meus-pets.component';
import { PesquisarComponent } from './pesquisar/pesquisar.component';
import { PetInfoComponent } from './pet-info/pet-info.component';
import { ModalAddPComponent } from './login/modal-add-p/modal-add-p.component';
import { ModalDeletePetComponent } from './meus-pets/modal-delete-pet/modal-delete-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { EditUsuarioComponent } from './edit-usuario/edit-usuario.component';
import { AddFastPetComponent } from './add-fast-pet/add-fast-pet.component';

import { LoginService } from './login/login.service';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { MatSnackBarModule } from '@angular/material';
import { AuthComponent } from './auth/auth.component';
import { MeusPets } from './meus-pets/meus-pets';
import { EditPet } from './edit-pet/edit-pet';
import { EditUsuario } from './edit-usuario/edit-usuario';
import { AddFastPet } from './add-fast-pet/add-fast-pet';
import { MatAutocompleteModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    AddPetComponent,
    AddPfisicaComponent,
    AddPjuridicaComponent,
    ChatComponent,
    FavoritosComponent,
    HomeComponent,
    LoginComponent,
    MeusPetsComponent,
    PesquisarComponent,
    PetInfoComponent,
    ModalAddPComponent,
    ModalDeletePetComponent,
    AuthComponent,
    EditPetComponent,
    EditUsuarioComponent,
    AddFastPetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    TextMaskModule,
    MatAutocompleteModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AppComponent, LoginService, MeusPetsComponent, MeusPets, EditPet, EditUsuario, AddFastPetComponent, AddFastPet,
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        window.location.href = (route.data as any).externalUrl;
      }
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalAddPComponent, ModalDeletePetComponent]
})
export class AppModule { }

