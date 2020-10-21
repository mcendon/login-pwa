import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LAST_SIGN_IN_TIME_KEY } from '../consts';

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

  login = (email: string, password: string) => {
    return new Promise<firebase.auth.UserCredential>((resolve, reject) => {
      this.fireAuth
        .signInWithEmailAndPassword(email, password)
        .then(async (data) => {
          this.user = data.user;
          try {
            await this.saveLastSignInTime();
            await this.updateLastSignInTime();
          } catch (e) {
            reject({ type: 1, error: e });
          }
          resolve(data);
        })
        .catch((e) => {
          reject({ type: 2, error: e });
        });
    });
  };

  logout = (): Promise<void> => {
    return this.fireAuth.signOut();
  };

  private saveLastSignInTime = () => {
    return new Promise<void>((resolve, reject) => {
      this.fireStore
        .collection('users')
        .doc(this.user.uid)
        .get()
        .subscribe(
          (storeData) => {
            const millis = storeData.get(LAST_SIGN_IN_TIME_KEY).seconds * 1000;
            localStorage.setItem(LAST_SIGN_IN_TIME_KEY, millis.toString());
            this.lastSignInTime = millis;
            resolve();
          },
          () => {
            reject();
          }
        );
    });
  };

  private updateLastSignInTime = (): Promise<void> => {
    const itemDoc: AngularFirestoreDocument<FirebaseUserItem> = this.fireStore
      .collection('users')
      .doc(this.user.uid);
    return itemDoc.update({
      lastSignInTime: new Date(),
    });
  };

  getLastSignInTime = (): number => {
    if (!this.lastSignInTime) {
      this.lastSignInTime = parseInt(
        localStorage.getItem(LAST_SIGN_IN_TIME_KEY)
      );
    }
    return this.lastSignInTime;
  };

  getUser = (): Observable<firebase.User> => {
    return this.fireAuth.user;
  };
}
