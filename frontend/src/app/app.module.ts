import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
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

const routes: Routes = [
	{ path: '', redirectTo: 'initial', pathMatch: 'full' },
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
    ContactComponent
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
