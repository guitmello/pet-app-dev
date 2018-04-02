import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

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

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';


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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

