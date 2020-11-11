import { Component, OnInit } from '@angular/core';
import { UserI } from '../../interfaces/user';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, Platform } from '@ionic/angular';
import { TodoServiceService } from '../../services/todo-service.service';
import { LoginPage } from 'src/app/login/login.page';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.page.html',
  styleUrls: ['./editar-usuario.page.scss'],
})
export class EditarUsuarioPage implements OnInit {

  user: UserI = {
    nombre: '',
    apellidos: '',
    clave: '',
    ubicacion: ''
  };

  userId = null;
  data: any[] = [];

  constructor(
    private route: ActivatedRoute, private nav: NavController,
    private todoService: TodoServiceService, private loadingController: LoadingController, private platform: Platform
  ) {
    this.user = LoginPage.CurrentUser;
    this.userId = LoginPage.CurrentUser;
    this.platform.ready().then(() => {
      this.data = [{id: 101, name: "México"},
                   {id: 102, name: "Perú"},
                   {id: 103, name: "Argentina"},
                   {id: 104, name: "Estados unidos"},
                   {id: 105, name: "Colombia"}]
    });
  }

  ngOnInit() {
    /*
    if (this.userId) {
      this.loadTodo();
    }*/
  }
  /*
  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Cargando .....'
    });
    await loading.present();
    this.todoService.getTodo(this.userId).subscribe(res => {
      loading.dismiss();
      this.user = res;
    });
  }*/

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Guardando .....'
    });
    await loading.present();
    if (this.userId.id) {
      //update
      this.todoService.updateTodo(this.user, this.userId.id).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/app/tabs/tab4');
      });
    }
  }

}
