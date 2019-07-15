import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'eda-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  checked = false;
  @Input() options;
  @Output() checkEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  checkedFunc(event) {
    this.checkEvent.emit(event);
  }
}
