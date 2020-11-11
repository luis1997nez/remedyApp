import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
import { LoginPage } from '../login/login.page';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: User = new User();

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onRegister() {

    const user = await this.authSvc.onRegister(this.user);


    if (user) {
      this.authSvc.addUser(this.user).subscribe(
        (resp: any) => {
          console.log(resp);
          LoginPage.CurrentUser = resp;
        }
      );

      LoginPage.GlobalSession = true;
      
      console.log('Se ha creado el usuario correctamente');
      this.router.navigateByUrl('/terminos');
    }
  }
}
