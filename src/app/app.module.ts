import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { HttpModule } from '@angular/http';



export const firebaseConfig = {
  apiKey: "AIzaSyAiP6Rn7h3ndcYM8qtNxzOWZbXrHu5E-p0",
  authDomain: "sidchat-3babf.firebaseapp.com",
  databaseURL: "https://sidchat-3babf.firebaseio.com",
  projectId: "sidchat-3babf",
  storageBucket: "sidchat-3babf.appspot.com",
  messagingSenderId: "767308829588"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
