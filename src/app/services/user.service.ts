import { Injectable } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth:Auth) { }

  register({email, password}: any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  login({email, password}: any) {
   return signInWithEmailAndPassword(this.auth, email, password);
  }
  resetPassword({email}:any){
    return sendPasswordResetEmail(this.auth, email)
  }
}