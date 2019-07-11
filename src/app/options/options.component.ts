import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'eda-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  checked = false;
  @Input() name;
  constructor() { }

  ngOnInit() {
  }

}
