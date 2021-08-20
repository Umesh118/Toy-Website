import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {HttpClientModule} from '@angular/common/http';
// import {HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToyListComponent } from './toy-list/toy-list.component';
import { ToyDescriptionComponent } from './toy-description/toy-description.component';
import { DollsComponent } from './dolls/dolls.component';

@NgModule({
  declarations: [
    AppComponent,
    ToyListComponent,
    ToyDescriptionComponent,
    DollsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClient,
    // HttpClientModule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
