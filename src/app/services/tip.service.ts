import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tip } from '../interfaces/tip';

@Injectable({
  providedIn: 'root'
})
export class TipService {

  private todosTip: AngularFirestoreCollection<Tip>;
  private todosT: Observable<Tip[]>;

  constructor(db: AngularFirestore) {
        // todos es la tabla
        this.todosTip = db.collection<Tip>('tips');
        this.todosT = this.todosTip.snapshotChanges().pipe(map(
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
    return this.todosT;
  }

  getTodo(id: string) {
    return this.todosTip.doc<Tip>(id).valueChanges();
  }

  updateTodo(todo: Tip, id: string) {
    return this.todosTip.doc(id).update(todo);
  }

  addTodo(todo: Tip) {
    return this.todosTip.add(todo);
  }

  removeTodo(id: string) {
    return this.todosTip.doc(id).delete();
  }
}
