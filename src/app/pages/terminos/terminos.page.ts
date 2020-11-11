import { Component, OnInit } from '@angular/core';
import { LoginPage } from 'src/app/login/login.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.page.html',
  styleUrls: ['./terminos.page.scss'],
})
export class TerminosPage implements OnInit {

  access: boolean = LoginPage.GlobalSession;

  constructor(private router: Router) {
    if (!LoginPage.GlobalSession){
      this.router.navigateByUrl('/login');
    }
   }

  ngOnInit() {
    
  }

}
