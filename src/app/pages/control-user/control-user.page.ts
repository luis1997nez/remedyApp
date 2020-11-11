import { Component, OnInit } from '@angular/core';
import { UserI } from '../../interfaces/user';
import { TodoServiceService } from '../../services/todo-service.service';
import { LoginPage } from '../../login/login.page';

@Component({
  selector: 'app-control-user',
  templateUrl: './control-user.page.html',
  styleUrls: ['./control-user.page.scss'],
})
export class ControlUserPage implements OnInit {

  user: UserI[];
  public cambio = 'assets/img/hombre.png';

  constructor(public todoServiceService: TodoServiceService) {}

  ngOnInit() {
    this.todoServiceService.getTodos().subscribe(res => {
      this.user = res;
    });

    /*
    if ( this.user.genero == 'hombre' ) {
      this.cambio = 'assets/img/hombre.png';
    } else {
      this.cambio = 'assets/img/mujer.png';

    }*/
  }

}
