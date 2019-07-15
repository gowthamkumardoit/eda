import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { Animations } from '../animations/stack.animation';
import { CommonService } from '../common.service';
import * as $ from 'jquery';
import * as _ from 'lodash';
@Component({
  selector: 'eda-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  animations: [Animations]
})
export class ResultComponent implements OnInit, AfterViewChecked {

  @ViewChild('scrollMe', { static: true }) private myScrollContainer: ElementRef;
  panelOpenState = true;

  dataProfiling: any = [];
  missingValues: any = [];
  plots: any = [];
  dependencyCheck: any = [];

  resultCards: any = [];

  constructor(private commonService: CommonService) { }

  ngOnInit() {

    this.dataProfiling = [
      { id: 1, name: 'Shape', isChecked: false },
      { id: 2, name: 'Data type', isChecked: false },
      { id: 3, name: 'Summary', isChecked: false },
      { id: 4, name: 'Describe', isChecked: false },
      { id: 5, name: 'Head', isChecked: false },
      { id: 6, name: 'Tail', isChecked: false },
      { id: 7, name: 'Unique', isChecked: false },
      { id: 8, name: 'Distinct', isChecked: false },
      { id: 9, name: 'Isnull', isChecked: false },
      { id: 10, name: 'Missing value Row wise', isChecked: false },
      { id: 11, name: 'Missing value Column wise', isChecked: false },
      { id: 12, name: 'Fill by NaN', isChecked: false },
      { id: 13, name: 'Confusion Matrix', isChecked: false },
      { id: 14, name: 'Box Plot', isChecked: false },
      { id: 15, name: 'Histogram', isChecked: false },
      { id: 16, name: 'Chi-Square Test', isChecked: false },
    ];
  }

  ngAfterViewChecked() {
  }

  checkEvent(event) {
    const inp = event;
    this.dataProfiling.forEach(obj => {
      if (obj.id === parseInt(inp.source.name, 10)) {
        if (!inp.checked) {
          if (this.resultCards && this.resultCards.length > 0) {
            this.resultCards.forEach((cards, idx) => {
              if (cards.id === parseInt(inp.source.name, 10)) {
                this.resultCards.splice(idx, 1);
              }
            });
          }
          return;
        }
        this.resultCards.push({ ...obj, isChecked: inp.checked });
        this.scrollToBottom();
      }
    });
  }
  clearAll() {
    const data = [];
    this.dataProfiling.forEach(obj => {
      return obj.isChecked === true ? data.push({ ...obj, isChecked: false }) : data.push({ ...obj });
    });
    this.dataProfiling = data;
    this.resultCards = [];
  }

  scrollToBottom() {
    try {
      // console.log('try block');
      // console.log(this.myScrollContainer.nativeElement.scrollHeight);
      // console.log(this.myScrollContainer.nativeElement.scrollTop);
      // this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      // console.log(this.myScrollContainer.nativeElement.scrollTop);
      $('#scrollMe').scrollTop(this.myScrollContainer.nativeElement.scrollHeight);
      $('html,body').animate({ scrollTop: this.myScrollContainer.nativeElement.scrollHeight }, 'fast');
      console.log(this.myScrollContainer.nativeElement.scrollHeight);
      // this.commonService.checkHeight.next(this.myScrollContainer.nativeElement.scrollHeight);
    } catch (err) {

    }
  }
}
