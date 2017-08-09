import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../../Service/global-service.service';

import {HttpClient} from '../../Service/http-client';


@Component({
    selector: 'city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.styl'],
    providers: [GlobalService, HttpClient]
})

export class CityComponent implements OnInit {
    cities = [];


    constructor(private globalService: GlobalService, private http: HttpClient) {}

    ngOnInit(): void {
        this.globalService.showAnimations('.js__animate');
        this.globalService.changeMainBG('0.6', true);

        this.getCity();
    }
    getCity() {
        this.http.getData('api/city').subscribe(item => {
            this.cities = item;
        });
    }
}
