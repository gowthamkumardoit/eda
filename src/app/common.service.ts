import { Injectable } from '@angular/core';
import { from, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  checkHeight: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor() { }
}
