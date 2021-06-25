import { RouterModule, Routes } from '@angular/router';

import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatTableModule } from  '@angular/material/table';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { MenuComponent } from './menu/menu.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'callback', component: CallbackComponent },
    { path: 'login', component: LoginComponent },
	{ path: 'leaderboard', component: LeaderboardComponent },
	{ path: 'contacts', component: ContactComponent },
	{ path: '**', redirectTo: '/', pathMatch: 'full' }
  ];
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenuComponent,
    LeaderboardComponent,
    ContactComponent,
    LoginComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), HttpClientModule, BrowserAnimationsModule,
	MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
