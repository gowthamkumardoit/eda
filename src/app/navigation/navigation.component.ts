import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { trigger, state, transition, group, query, style, animate } from '@angular/animations';
import { slideInAnimation } from '../animations/router.animation';
import { CommonService } from '../common.service';
import * as $ from 'jquery';
// tslint:disable-next-line: whitespace
@Component({
  selector: 'eda-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [slideInAnimation]
})
export class NavigationComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollMe', { static: true }) myScroller: ElementRef;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  // tslint:disable-next-line:max-line-length
  constructor(private breakpointObserver: BreakpointObserver, private activatedRoute: ActivatedRoute, private commonService: CommonService) { }
  getDepth(outlet: RouterOutlet) {
    // tslint:disable-next-line:no-string-literal
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.commonService.checkHeight.subscribe((data) => {
      if (data) {
        this.scroll(data);
      }
    });
  }

  scroll(data) {
    console.log(data);
    // $('div#scrollMe').scrollTop(data);
    // console.log($('div#scrollMe').scrollTop());
    // console.log(this.myScroller.nativeElement);

  }

}
