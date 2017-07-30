import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../../Service/global-service.service';

@Component({
    selector: 'result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.styl'],
    providers: [GlobalService]
})

export class ResultComponent implements OnInit {
    constructor(private globalService: GlobalService) {
    }

    ngOnInit(): void {
        this.globalService.showAnimations('.js__animate');
        this.globalService.changeMainBG('0.1', false);
        this.globalService.changeClassHtmlOnRoute('html-result')
    }

}
