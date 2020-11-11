import { Component, OnInit } from '@angular/core';
import 'firebase/firestore';
import { Tip } from 'src/app/interfaces/tip';
import { TipService } from 'src/app/services/tip.service';
import { LoginPage } from 'src/app/login/login.page';

@Component({
  selector: 'app-mis-remedios',
  templateUrl: './mis-remedios.page.html',
  styleUrls: ['./mis-remedios.page.scss'],
})
export class MisRemediosPage implements OnInit {

  favoritos: string[];
  user = LoginPage.CurrentUser;
  tips: Tip[];
  itemFavs: Tip[] = [];

  constructor(public tipService: TipService) { }

  ngOnInit() {
    this.tipService.getTodos().subscribe(res => {
      this.tips = res;
      this.findTip();
    });
  }

  findTip() {
    this.itemFavs = this.tips.filter(tip => {
      if (this.user.id == tip.usuario) {
          return true;
      }
      return false;
    });
  }
  /*
  findTip() {
    this.itemFavs = this.tips.filter(tip => {
      if (this.user.id && tip.usuario.id) {
        if (this.user.id.includes(tip.id)) {
          return true;
        }
      }
      return false;
    });
  }*/

}
