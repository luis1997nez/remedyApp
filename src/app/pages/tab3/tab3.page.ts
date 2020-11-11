import { Component, OnInit } from '@angular/core';
import 'firebase/firestore';
import { Tip } from 'src/app/interfaces/tip';
import { TipsService } from 'src/app/services/tips.service';
import { LoginPage } from 'src/app/login/login.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  favoritos: string[];
  user = LoginPage.CurrentUser;
  items: Tip[] = [];
  itemFavs: Tip[] = [];

  constructor(public tipsService: TipsService) { }

  ngOnInit() {
    this.tipsService.list().subscribe((resp: any) => {
      // console.log(resp);
      this.items = resp;
      this.user = LoginPage.CurrentUser;
      this.favoritos = this.user.favoritos;
      this.findFavs();
    });
  }

  findFavs() {
    this.itemFavs = this.items.filter(tip => {
      if (this.user.favoritos && tip.id) {
        if (this.user.favoritos.includes(tip.id)) {
          return true;
        }
      }
      return false;
    });
  }
}
