import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
import { ToastController } from '@ionic/angular';
import { UserI } from '../interfaces/user';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = new User();
  public static GlobalSession: boolean = false;
  public static CurrentUser: UserI;
  constructor(private router: Router, private authSvc: AuthService, private toast: ToastController, private nav: NavController) {

  }

  ngOnInit() {
  }

  async onLogin() {
    const user = await this.authSvc.onLogin(this.user);

    if (user) {
      LoginPage.GlobalSession = true;
      this.authSvc.getUserByMail(this.user.email).subscribe(
        (resp: any)=>{
          //console.log(resp);
          LoginPage.CurrentUser = resp[0];
         // console.log(LoginPage.CurrentUser);
          
        }
      )

      this.shotMessage('Has entrado satisfactoriamente');
      console.log(LoginPage.GlobalSession);
      
      this.router.navigateByUrl('/app/tabs/tab1');
    }else{
      this.shotMessage('Asegurate de que tu cuenta sea correcta');
    }
  }

  async shotMessage(msg: string)
  {
    const toast = await this.toast.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  onClick() {
    this.nav.navigateForward('/register');
  }
}
