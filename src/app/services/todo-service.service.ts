import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserI } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private todosUsuarios: AngularFirestoreCollection<UserI>;
  private todosU: Observable<UserI[]>;

  constructor(db: AngularFirestore) {
        // todos es la tabla
        this.todosUsuarios = db.collection<UserI>('users');
        this.todosU = this.todosUsuarios.snapshotChanges().pipe(map(
          actions => {
            return actions.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return {id, ...data };
            });
          }
        ));
  }

  getTodos() {
    return this.todosU;
  }

  getTodo(id: string) {
    return this.todosUsuarios.doc<UserI>(id).valueChanges();
  }

  updateTodo(todo: UserI, id: string) {
    return this.todosUsuarios.doc(id).update(todo);
  }

  addTodo(todo: UserI) {
    return this.todosUsuarios.add(todo);
  }

  removeTodo(id: string) {
    return this.todosUsuarios.doc(id).delete();
  }

}
