import { Component, OnInit } from '@angular/core';
import { Tip } from '../../interfaces/tip';
import { TipsService } from '../../services/tips.service';

@Component({
  selector: 'app-control-remedio',
  templateUrl: './control-remedio.page.html',
  styleUrls: ['./control-remedio.page.scss'],
})
export class ControlRemedioPage implements OnInit {

  items: Tip[] = [];

  constructor(private tipsService: TipsService) {
    this.tipsService.list().subscribe((resp: any) => {
      this.items = resp;
    });
   }

  ngOnInit() {
  }

}
