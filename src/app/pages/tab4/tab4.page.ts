import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginPage } from 'src/app/login/login.page';
import { UserI } from 'src/app/interfaces/user';
import { TodoServiceService } from '../../services/todo-service.service';
import { User } from '../../shared/user.class';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  posts: any;
//user = LoginPage.CurrentUser;
  public cambio;

  user: UserI;
  

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtlr: ToastController,
    private firestore: AngularFirestore,
    private todoService: TodoServiceService ) {
      this.user = LoginPage.CurrentUser;
      console.log(this.user.id);
    }


  ngOnInit() {
    if ( this.user.roll == 1) {
      this.cambio = 'assets/img/contrasena.png';
    } else {
      this.cambio = null;

    }
  }

}
