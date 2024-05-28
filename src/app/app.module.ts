import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { GestionParfumComponent } from './gestion-parfum/gestion-parfum.component';
import { AjoutParfumComponent } from './ajout-parfum/ajout-parfum.component';
import { EditParfumComponent } from './edit-parfum/edit-parfum.component';
import { DetailsComponent } from './details/details.component';




@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
     GestionParfumComponent,
     AjoutParfumComponent,
     EditParfumComponent,
     DetailsComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
