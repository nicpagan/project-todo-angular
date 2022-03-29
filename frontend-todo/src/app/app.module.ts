import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './state/todos/todo.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TodoEffects]),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
