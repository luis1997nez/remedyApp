import { Component, OnInit } from '@angular/core';
import { UserI } from '../../interfaces/user';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, Platform } from '@ionic/angular';
import { TodoServiceService } from '../../services/todo-service.service';
import { LoginPage } from 'src/app/login/login.page';


@Component({
  selector: 'app-control-user2',
  templateUrl: './control-user2.page.html',
  styleUrls: ['./control-user2.page.scss'],
})
export class ControlUser2Page implements OnInit {

  user: UserI = {
    nombre: '',
    apellidos: '',
    clave: '',
    ubicacion: ''
  };

  data: any[] = [];


  todoId = null;
  ids = null;


  constructor(
    private route: ActivatedRoute, private nav: NavController,
    private todoService: TodoServiceService, private loadingController: LoadingController, private platform: Platform
  ) { 
    this.ids = LoginPage.CurrentUser;
    this.platform.ready().then(() => {
      this.data = [{id: 101, name: "México"},
                   {id: 102, name: "Perú"},
                   {id: 103, name: "Argentina"},
                   {id: 104, name: "Estados unidos"},
                   {id: 105, name: "Colombia"}]
    });
  }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId){
      this.loadTodo();
    }
  }

  async loadTodo(){
    const loading = await this.loadingController.create({
      message: 'Cargando .....'
    });
    await loading.present();
    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.user = res;
    });
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Guardando .....'
    });
    await loading.present();
    if (this.todoId) {
      //update
      this.todoService.updateTodo(this.user, this.todoId).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/control-user');
      });
    }
  }

  onRemove(idTodo: string){
    if(this.ids.id !== idTodo){
      this.todoService.removeTodo(idTodo);
      console.log(idTodo);
    }else {
      console.log('No puede eliminar este usuario porque esta en uso');
    }
    
  }

}
