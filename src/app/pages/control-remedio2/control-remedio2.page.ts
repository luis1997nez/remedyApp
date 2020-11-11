import { Component, OnInit } from '@angular/core';
import { Tip } from '../../interfaces/tip';
import { TipService } from '../../services/tip.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, Platform } from '@ionic/angular';
import { LoginPage } from 'src/app/login/login.page';

@Component({
  selector: 'app-control-remedio2',
  templateUrl: './control-remedio2.page.html',
  styleUrls: ['./control-remedio2.page.scss'],
})
export class ControlRemedio2Page implements OnInit {

  todo: Tip = {
    titulo: '',
    categoria: '',
    ingredientes: '',
    cuerpo: '',
    urlToImage: ''
  };

  todoId = null;

  data: any[] = [];

  constructor(
    private route: ActivatedRoute, private nav: NavController, private platform: Platform,
    private todoService: TipService, private loadingController: LoadingController
    ) {
      this.platform.ready().then(() => {
        this.data = [{id: 101, name: "Dolor de cabeza"},
                     {id: 102, name: "Dolor de estómago"},
                     {id: 103, name: "Dolor de ojos"},
                     {id: 104, name: "Dolor de pies"}]
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
      this.todo = res;
    });
  }

  async saveTodo(){
    const loading = await this.loadingController.create({
      message: 'Guardando .....'
    });
    await loading.present();
    if (this.todoId){
      //update
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/control-remedio');
      });
    }
  }

  onRemove(idTodo: string){
    this.todoService.removeTodo(idTodo);
    console.log(idTodo);
  }


}
