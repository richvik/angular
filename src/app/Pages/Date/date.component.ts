import {Component, AfterViewInit, EventEmitter, ViewChild} from '@angular/core';
import {GlobalService} from '../../Service/global-service.service';




@Component({
    selector: 'date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.styl'],
})


export class DateComponent implements AfterViewInit {


// test : MdDatepickerModule;
    constructor(private globalService: GlobalService) {
      /*  this.options = new DatePickerOptions({
            autoApply: true,
            style: 'big',
            todayText: 'sadasd'
        });*/
        // this.test = new MdDatepickerModule();
    }

    ngAfterViewInit(): void {
        let self = this;
        this.globalService.showAnimations('.js__animate');
        this.globalService.changeMainBG('0.3', false)
        self.initDate()
    }

    initDate() {
        /*  $("#datepicker").datepicker({
              minDate: "0",
              onSelect: function () {

                 /!* if ($('html.desktop').length) {
                      //setTimeOutRemoveClassCss('.b-page-4__header', 'animated bounceInUp', 300, '-6em', '0');
                      /!*    setTimeOutRemoveClassCss('#datepicker', 'animated bounceInUp', 700, '-5em', '0');

                       setTimeout(function () {
                       /!*  $('.b-page-4').addClass('_dispNon');
                       $('.b-page-5').removeClass('_dispNon');*!/
                       setTimeOutCss('.b-background__top', '-7em', '0.2', 100);
                       //setTimeOutAddClass('.b-page-5__header', 'animated bounceInUp', 300);
                       setTimeOutAddClass('.b-page__select-mood--1', 'animated bounceInUp', 800);
                       setTimeOutAddClass('.b-page__select-mood--2', 'animated bounceInUp', 1000);
                       setTimeOutAddClass('.b-page__select-mood--3', 'animated bounceInUp', 1200);
                       }, 900);*!/
                      $('#datepicker').removeClass('_dispBl');
                      $('.b-mobile__date').removeClass('_dispNon');
                  }*!/

              }
          });*/
    }
}
