import { Component, OnInit, Input } from '@angular/core';
import { Tip } from 'src/app/interfaces/tip';
import { TipsService } from 'src/app/services/tips.service';
import { UserI } from 'src/app/interfaces/user';
import { LoginPage } from 'src/app/login/login.page';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() tip: Tip;
  heartState: string = "heart-outline";
  likesChange: Number;
  user: UserI;

  constructor(
    private tipservice: TipsService,
    private userService: AuthService,
    private toast: ToastController) {}

  ngOnInit() {
    this.user = LoginPage.CurrentUser;
    // console.log(this.user.favoritos);
    if (this.user.favoritos.indexOf(this.tip.id) !== -1) {
      // console.log("Liked!");
      this.heartState = "heart";
    } else{
      // console.log("UnLiked");
      this.heartState = "heart-outline";
    }
  }

  setLike() {

    if (this.heartState == "heart-outline") {

      this.likesChange = +this.tip.likes + 1;

      const id: number = this.user.favoritos.indexOf(this.tip.id);

      if (id === -1) {
        this.heartState = "heart";
        this.user.favoritos.unshift(this.tip.id);
        this.userService.addLike(this.user.id, this.user);
      }

      this.toastMessage("Agregado a favoritos");

    } else if (this.heartState == "heart") {
      this.heartState = "heart-outline";
      this.likesChange = +this.tip.likes - 1;

      const id: number = this.user.favoritos.indexOf(this.tip.id);
      if (id !== -1) {
        this.user.favoritos.splice(id, 1);
        this.userService.addLike(this.user.id, this.user);
      }
      // console.log(this.likesChange);
      this.toastMessage("Eliminado de favoritos");
    }
    this.tipservice.update(this.tip.id, {"likes":this.likesChange})
  }


  async toastMessage(msg: string){
    const toast = await this.toast.create({
      message: msg,
      duration: 1000
    });
    toast.present();
  }
}
