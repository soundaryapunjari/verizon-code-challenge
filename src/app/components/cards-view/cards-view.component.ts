import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss']
})
export class CardsViewComponent {

  isActive = false;
  selectedCard!: number;

  mouseHoverIn(cardNumber: number){
    this.selectedCard = cardNumber;
    this.isActive = true;
  }


  mouseHoverOut(){
    this.isActive = false;
  }
}
