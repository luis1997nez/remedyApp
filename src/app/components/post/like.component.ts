import { Component, Input } from '@angular/core';


@Component({
    selector: 'like-box',
    template: 'like.component.html',
})
export class LikeComponent {
    numberOfLikes: number;

    likeButtonClick() {
        this.numberOfLikes++;
    }

    dislikeButtonClick(){
        this.numberOfLikes--;
    }
}

