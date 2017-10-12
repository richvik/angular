import {Component, OnInit, HostBinding} from '@angular/core';
import {GlobalService} from '../../Service/global-service.service';

import {HttpClient} from '../../Service/http-client';

@Component({
    selector: 'result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.styl'],
    providers: [HttpClient]
})

export class ResultComponent implements OnInit {
    filterEvents = [];
    isClicked = false;

    constructor(private globalService: GlobalService, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.globalService.showAnimations('.js__animate');
        this.globalService.changeMainBG('0.1', false);
        this.globalService.changeClassHtmlOnRoute('html-result');

        this.getResult();
    }
    liClicked(currentID, element) {
        let obj = {};

        if (currentID === 0) {
            obj = {};
        } else {
            obj = {'category_id': currentID};
        }

        this.http.postResult('api/events', obj).subscribe(item => {
            this.filterEvents = item;
            console.log(item);
        });
        this.toggleClass()
    }

    toggleClass() {
        if (this.isClicked) {
            return 'b-filter--active';
        } else {
            return '';
        }
    }

    getResult() {
        const test ={};
        // const test ={type: "Концерт"};
        // let resultSendObject = this.globalService.objectSend;
        // console.log(resultSendObject);
        this.http.postResult('api/events', test).subscribe(item => {
            this.filterEvents = item;
        })
    }
}
