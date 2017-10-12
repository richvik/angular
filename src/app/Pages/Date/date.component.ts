import {Component, AfterViewInit, EventEmitter} from '@angular/core';
import {GlobalService} from '../../Service/global-service.service';

// import {DatepickerComponent} from '../../Components/datepicker.component';

import { DatePickerOptions, DateModel } from 'ng2-datepicker';
// import {MdDatepickerModule} from '@angular/material';
@Component({
    selector: 'date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.styl'],
    // providers: [MdDatepickerModule]
})


export class DateComponent implements AfterViewInit {

    date: DateModel;
    options: DatePickerOptions;
// test : MdDatepickerModule;
    constructor(private globalService: GlobalService) {
        this.options = new DatePickerOptions({
            autoApply:true,
            style:'big',
            todayText:'sadasd'
        });
        // this.test = new MdDatepickerModule();
    }

    ngAfterViewInit(): void {
        let self = this;
        this.globalService.showAnimations('.js__animate');
        this.globalService.changeMainBG('0.3', false)
    }

}
