import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tip } from '../../interfaces/tip';
import { UserI } from 'src/app/interfaces/user';
import { LoginPage } from 'src/app/login/login.page';
import { ToastController, LoadingController, Platform, NavController } from '@ionic/angular';


@Component({
  selector: 'app-subir-remedio',
  templateUrl: './subir-remedio.page.html',
  styleUrls: ['./subir-remedio.page.scss'],
})
export class SubirRemedioPage implements OnInit {

  post = {} as Tip;

  data: any[] = [];
  user: UserI;
  constructor(
    private toastCtrl: ToastController,
    private loadingCrtl: LoadingController,
    private firestore: AngularFirestore,
    private platform: Platform,
    private nav: NavController
    ) {

      this.user = LoginPage.CurrentUser;
      this.platform.ready().then(() => {
        this.data = [{id: 101, name: "Dolor de cabeza"},
                     {id: 102, name: "Dolor de estómago"},
                     {id: 103, name: "Dolor de ojos"},
                     {id: 104, name: "Dolor de pies"}]
      });
    }

  ngOnInit() {
  }

  async createPost(post: Tip) {

    if (this.formValidation()) {

      let loader = this.loadingCrtl.create({
        message: "Por favor, espere..."
      });
      (await loader).present();
      try {
        post.likes = 0;
        post.usuario = this.user.id;
        await this.firestore.collection("tips").add(post);
        this.nav.navigateForward('/app/tabs/tab1');
      } catch(e){
        this.showToast(e);
      }

      (await loader).dismiss();

    }

  }

  formValidation(){
    if(!this.post.titulo){
      this.showToast("Ingresa el nombre");
      return false;
    }

    if(!this.post.categoria){
      this.showToast("Ingresa la categoria");
      return false;
    }

    if(!this.post.ingredientes){
      this.showToast("Ingrese los ingredientes");
      return false;
    }

    if(!this.post.cuerpo){
      this.showToast("Ingresa la receta");
      return false;
    }

    if(!this.post.urlToImage){
      this.showToast("Adjunte la url de la imagen relacionada con la receta");
      return false;
    }

    return true;
  }

  showToast(message: string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then(toastData => toastData.present());
  }

}
