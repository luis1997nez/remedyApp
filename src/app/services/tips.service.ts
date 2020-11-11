import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tip } from '../interfaces/tip';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  private tipcollection = "tips"
  private tips: AngularFirestoreCollection<Tip> = null;

  constructor(private db: AngularFirestore) 
  { 
    //console.log("constructor de servicio tips");
    this.tips = db.collection(this.tipcollection);
  }

  public list()
  {
    return this.tips.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Tip;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  public store(tip: Tip): void
  {
    this.tips.add(tip);
  }

  public update(id:string, value: any): void
  {
    this.tips.doc(id).update(value);
  }

  public destroy(id: string): void
  {
    this.tips.doc(id).delete();
  }

  public find(id: string)
  {
    return this.tips.doc(id).valueChanges();
  }

}
