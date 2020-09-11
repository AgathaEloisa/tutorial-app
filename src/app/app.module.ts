import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

/* Angular Material */
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { DetailTutorialComponent } from './components/detail-tutorial/detail-tutorial.component';
import { ModifyTutorialComponent } from './components/modify-tutorial/modify-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AddTutorialComponent,
    DetailTutorialComponent,
    ModifyTutorialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
