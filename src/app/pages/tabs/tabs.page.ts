import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPage } from 'src/app/login/login.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  login: boolean;
  constructor(private router: Router) 
  {
    this.login = LoginPage.GlobalSession;
    if (!LoginPage.GlobalSession){
      router.navigateByUrl('login');
      console.log(LoginPage.GlobalSession);
      
    }
    console.log(LoginPage.GlobalSession);
  }

}
