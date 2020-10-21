import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';

interface FirebaseUserItem {
  lastSignInTime: Date;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: firebase.User;
  private lastSignInTime: number = null;
  constructor(
    private fireAuth: AngularFireAuth,
    private fireStore: AngularFirestore
  ) {}

  login = (user: UserModel) => {
    return new Promise<firebase.auth.UserCredential>((resolve, reject) => {
      this.fireAuth
        .signInWithEmailAndPassword(user.email, user.password)
        .then(async (data) => {
          this.user = data.user;
          await this.saveLastSignInTime();
          await this.updateLastSignInTime();
          resolve(data);
        })
        .catch((error) => reject(error));
    });
  };

  logout = (): Promise<void> => {
    return this.fireAuth.signOut();
  };

  private saveLastSignInTime = () => {
    return new Promise<void>((resolve) => {
      this.fireStore
        .collection('users')
        .doc(this.user.uid)
        .get()
        .subscribe((storeData) => {
          let millis = storeData.get('lastSignInTime').seconds * 1000;
          localStorage.setItem('lastSignInTime', millis.toString());
          this.lastSignInTime = millis;
          resolve();
        });
    });
  };

  private updateLastSignInTime = (): Promise<void> => {
    let itemDoc: AngularFirestoreDocument<FirebaseUserItem> = this.fireStore
      .collection('users')
      .doc(this.user.uid);
    return itemDoc.update({
      lastSignInTime: new Date(),
    });
  };

  getLastSignInTime = (): number => {
    if (this.lastSignInTime === null) {
      this.lastSignInTime = parseInt(localStorage.getItem('lastSignInTime'));
    }
    return this.lastSignInTime;
  };

  getUser = (): Observable<firebase.User> => {
    return this.fireAuth.user;
  };
}
