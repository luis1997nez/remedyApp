import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [HeaderComponent, PostComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [HeaderComponent, PostComponent]
})
export class ComponentsModule { }
