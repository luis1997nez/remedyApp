import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProI } from '../interfaces/pro';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private todosPro: AngularFirestoreCollection<ProI>;
  private todosP: Observable<ProI[]>;

  constructor(db: AngularFirestore) {
            // todos es la tabla
            this.todosPro = db.collection<ProI>('products');
            this.todosP = this.todosPro.snapshotChanges().pipe(map(
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
    return this.todosP;
  }

  getTodo(id: string) {
    return this.todosPro.doc<ProI>(id).valueChanges();
  }

  updateTodo(todo: ProI, id: string) {
    return this.todosPro.doc(id).update(todo);
  }

  addTodo(todo: ProI) {
    return this.todosPro.add(todo);
  }

  removeTodo(id: string) {
    return this.todosPro.doc(id).delete();
  }

}
