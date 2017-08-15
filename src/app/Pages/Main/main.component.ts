import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../Service/global-service.service';

@Component({
  selector: 'index',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.styl' ]
})
export class MainComponent implements OnInit {
  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.globalService.showAnimations('.js__animate');
      this.globalService.changeMainBG('1',true)
      this.globalService.changeClassHtmlOnRoute('html-main')
  }
  getData(){

  }
}
