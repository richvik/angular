import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../Service/global-service.service';
import {Router} from '@angular/router'

@Component({
  selector: 'mood',
  templateUrl: './mood.component.html',
  styleUrls: [ './mood.component.styl' ]
})

export class MoodComponent implements OnInit {
  constructor(private globalService: GlobalService, private router: Router) {}

  ngOnInit(): void {
    this.globalService.showAnimations('.js__animate');
      this.globalService.changeMainBG('0.2', false)

  }
    changeEvent(event) {
      this.globalService.objectSend['mood'] = event.target.value;
      this.router.navigate(['/result']);
    }
}
