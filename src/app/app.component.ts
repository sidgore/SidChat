import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuthModule  } from 'angularfire2/auth';
import {  AngularFireAuth } from 'angularfire2/auth';
import {  AngularFireModule } from 'angularfire2';
import { FirebaseListObservable } from 'angularfire2/database';

import { AngularFireDatabase } from 'angularfire2/database';


import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SidChat';
  //user: Observable<firebase.User>;
  items: FirebaseListObservable<any>;
  name: any;
  msgVal: string = '';


  constructor(public af: AngularFireAuth,public db: AngularFireDatabase) {
    this.items= db.list('/messages', {query: {limitToLast: 5} });
  this.af.authState.subscribe(auth => { if(auth) {this.name = auth; }});
}




login() {
  this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
}





chatSend(theirMessage: string) {
  this.items.push({ message: theirMessage, name:name});
  this.msgVal = '';
}


logout() {
  this.af.auth.signOut();
}

  
}
