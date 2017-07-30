import {Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import {GlobalService} from '../../Service/global-service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.styl'],
    providers: [GlobalService]
})


export class EventComponent implements OnInit {
    constructor(private globalService: GlobalService, private router: Router) {
    }


    ngOnInit(): void {
        this.globalService.showAnimations('.js__animate');
        this.globalService.changeMainBG('0.4', false)

    }

    changeEvent() {
        this.router.navigate(['/date']);
    }
}
