import { Component } from '@angular/core';
import 'firebase/firestore';
import { LoginPage } from 'src/app/login/login.page';
import { Tip } from 'src/app/interfaces/tip';
import { TipsService } from 'src/app/services/tips.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  favoritos: string[];
  user = LoginPage.CurrentUser;
  buttons = [
    {
      image: 'assets/img/dolor-cabeza.png',
      description: 'Dolor de cabeza',
      category: 'dolor de cabeza'
    },
    {
      image: 'assets/img/dolor-estomago.png',
      description: 'Dolor de estómago',
      category: 'dolor de estómago'
    },
    {
      image: 'assets/img/dolor-ojos.png',
      description: 'Dolor de ojos',
      category: 'dolor de ojos'
    },
    {
      image: 'assets/img/dolor-pie.png',
      description: 'Dolor de pies',
      category: 'dolor de pies'
    }
  ];
  categoriaRef: any;
  // items: Tip[] = [];
  allTipsList: Tip[] = [];
  tipsList: Tip[] = [];
  showButtons = true;

  constructor(public tipsService: TipsService) { }
  ngOnInit() {
    this.tipsService.list().subscribe((tipList: any) => {
      // console.log(resp);
      console.log(tipList);
      this.allTipsList = tipList;
      // this.tipsList = tipList;
      this.user = LoginPage.CurrentUser;
      this.favoritos = this.user.favoritos;
      console.log(this.favoritos);
      if (this.categoriaRef) {
        this.findByCategory(this.categoriaRef);
      } else {
        this.tipsList = [];
      }
    });
    /*
    this.afStore.collection('tips').valueChanges({ idField: 'id' }).subscribe(tipList => {
      console.log(tipList);
      this.allTipsList = tipList;
      // this.tipsList = tipList;
      this.favoritos = this.user.favoritos;
      console.log(this.favoritos);
    });
    */
  }

  inicializeItems(): void {
    this.tipsList = this.allTipsList;
  }

  showTipsFilter(event) {
    // this.inicializeItems();
    const categoryFilter = event.srcElement.value;
    this.findByCategory(categoryFilter);
  }

  findByCategory(category: any) {
    this.categoriaRef = category;
    console.log(category);

    if (!category) {
      console.log('vacio');
      this.tipsList = [];
      this.showButtons = true;
      return;
    }
    this.tipsList = this.allTipsList.filter(tip => {
      if (tip.categoria && category) {
        if (tip.categoria.toLowerCase().indexOf(category.toLowerCase()) > -1) {
          this.showButtons = false;
          return true;
        }
      }
      return false;
    });
  }
}
