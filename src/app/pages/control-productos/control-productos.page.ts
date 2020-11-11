import { Component, OnInit } from '@angular/core';
import { ProI } from '../../interfaces/pro';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-control-productos',
  templateUrl: './control-productos.page.html',
  styleUrls: ['./control-productos.page.scss'],
})
export class ControlProductosPage implements OnInit {

  pro: ProI[] = [];

  constructor(private proService: ProductosService) {
    this.proService.getTodos().subscribe((resp: any) => {
      this.pro = resp;
    });
   }

  ngOnInit() {
  }

}
