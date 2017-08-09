import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../../Service/global-service.service';

import {HttpClient} from '../../Service/http-client';

@Component({
    selector: 'result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.styl'],
    providers: [GlobalService, HttpClient]
})

export class ResultComponent implements OnInit {
    filterEvents = [];

    constructor(private globalService: GlobalService, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.globalService.showAnimations('.js__animate');
        this.globalService.changeMainBG('0.1', false);
        this.globalService.changeClassHtmlOnRoute('html-result');

        this.getResult();
    }

    liClicked(currentID){
        let obj = {
            'category_id': currentID
        };
        this.http.postResult('api/events', obj).subscribe(item => {
            this.filterEvents = item;
            console.log(item);
        })
    }

    getResult() {
        let obj = {
            // 'id': 39
    };

        this.http.postResult('api/events', obj).subscribe(item => {
            this.filterEvents = item;
            console.log(item);
        })
    }
}
