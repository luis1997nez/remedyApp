import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.class';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserI } from '../interfaces/user';
import { LoginPage } from '../login/login.page';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;
  private tipcollection = "users"
  private users: AngularFirestoreCollection<User> = null;

  constructor(public afAuth: AngularFireAuth, private db:AngularFirestore) { 
    afAuth.authState.subscribe(user => (this.isLogged = user));
    this.users = db.collection(this.tipcollection);
  }
    //metodo para el login
  async onLogin(user: User) {
    try {
      return await this.afAuth.auth.signInWithEmailAndPassword(
        user.email,
        user.password);
    } catch (error) {
      console.log('Error en al Loggear usuario', error);
    }
  }
  //registro
  async onRegister(user: User) {
    try {
          return await this.afAuth.auth.createUserWithEmailAndPassword(
            user.email,
            user.password
          );
    } catch (error) {
      console.log('Error al registrar usuario', error);
    }
  }

  updateUser(id: string, data: any)
  {
    this.users.doc(id).update(data);
  }

  addUser(user: User){
    user.password = "**********";
    user.roll = 0;
    const id = this.db.createId();
    this.users.doc(id).set(JSON.parse(JSON.stringify(user)));

    const query = this.db.doc<User>(`users/${id}`);
    
    return query.snapshotChanges().pipe(
      map(actions =>  {
        const data = actions.payload.data();
        const id = actions.payload.id;
        return { id, ...data };
      })
    );
  }

  addLike(id: string, userData: UserI)
  {
    const userLike = this.db.doc<UserI>(`users/${id}`);
    userLike.update(userData);
   // LoginPage.CurrentUser = userData;
  }

  getUserByMail(mail: string)
  {
    const user = this.db.collection<UserI>('users', ref=>{
      return ref.where('email', '==', mail)
    });

    return user.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as UserI;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }
}
