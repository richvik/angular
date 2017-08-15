import {Component,OnInit, Output, EventEmitter} from '@angular/core';
import {GlobalService} from './Service/global-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl'],
    providers: [GlobalService]
})

export class AppComponent implements OnInit {
    constructor(private globalService: GlobalService) {}

    ngOnInit() {
        // this.showAnimations();
        // this.globalService.showAnimations('.js__animate');

    }
}
