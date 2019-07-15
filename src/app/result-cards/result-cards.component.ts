import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'eda-result-cards',
  templateUrl: './result-cards.component.html',
  styleUrls: ['./result-cards.component.scss'],
})
export class ResultCardsComponent implements OnInit {

@Input() cardName;
  constructor() { }


  ngOnInit() {
  }

}
