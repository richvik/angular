import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../Service/global-service.service';

@Component({
  selector: 'city',
  templateUrl: './city.component.html',
  styleUrls: [ './city.component.styl' ],
  providers: [GlobalService]
})

export class CityComponent implements OnInit {
  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.globalService.showAnimations('.js__animate');
    this.globalService.changeMainBG('0.6',true)
  }
}
