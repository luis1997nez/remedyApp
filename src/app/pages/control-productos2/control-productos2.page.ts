import { Component, OnInit } from '@angular/core';
import { ProI } from '../../interfaces/pro';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-control-productos2',
  templateUrl: './control-productos2.page.html',
  styleUrls: ['./control-productos2.page.scss'],
})
export class ControlProductos2Page implements OnInit {
 todo: ProI = {
   nombre: '',
   descripcion: '',
   tipo: '',
   precio: 0,
   existencia: true,
   urlToImage: ''
 }

 data: any[] = [];
  todoId = null;

  constructor(
    private route: ActivatedRoute, private nav: NavController,
    private todoService: ProductosService, private loadingController: LoadingController, private platform: Platform
  ) {
    this.platform.ready().then(() => {
      this.data = [{id: 101, name: "true"},
                   {id: 102, name: "false"}
                  ]
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
        this.nav.navigateForward('/control-productos');
      });
    }else {
      //Add new

      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/control-productos');
    });
    }
  }

  onRemove(idTodo: string){
    this.todoService.removeTodo(idTodo);
    console.log(idTodo);
  }
}
