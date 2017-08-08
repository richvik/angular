import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../../Service/global-service.service';
import {HttpService} from '../../Service/http.service';

@Component({
    selector: 'city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.styl'],
    providers: [GlobalService, HttpService]
})

export class CityComponent implements OnInit {
    cities = [];
    constructor(private globalService: GlobalService, private http: HttpService) {
    }

    ngOnInit(): void {
        this.globalService.showAnimations('.js__animate');
        this.globalService.changeMainBG('0.6', true)
        this.http.getData().then(item => {
            this.cities = item;
            console.log(this.cities);
        });

    }

    getCity() {

    }
}
