import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eda-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  panelOpenState = false;

  dataProfiling: any = [];
  missingValues: any = [];
  plots: any = [];
  dependencyCheck: any = [];
  constructor() { }

  ngOnInit() {

    this.dataProfiling = [
      { 'id': 1, 'name':  'Shape'},
      { 'id': 2, 'name':  'Data type'},
      { 'id': 3, 'name':  'Summary'},
      { 'id': 4, 'name':  'Describe'},
      { 'id': 5, 'name':  'Head'},
      { 'id': 6, 'name':  'Tail'},
      { 'id': 7, 'name':  'Unique'},
      { 'id': 8, 'name':  'Distinct'},
      { 'id': 9, 'name':  'Isnull'},
    ]
  }

}
