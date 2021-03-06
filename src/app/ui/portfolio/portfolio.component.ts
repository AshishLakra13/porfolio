import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdlDialogService } from '@angular-mdl/core';
import { MdlDatePickerService } from '@angular-mdl/datepicker/datepicker.service';
import * as moment from 'moment';

import { ServiceWindow, ServicePortfolioApi, ModelTechnology } from './../../services'

@Component({
    selector: 'portfolio-view',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

    returnUrl: string;

    nativeWindow: any;

    constructor(
        private dialogService: MdlDialogService,
        private datePicker: MdlDatePickerService,
        private route: ActivatedRoute,
        private router: Router,
        private servicePortfolioApi: ServicePortfolioApi,
        private serviceWindow: ServiceWindow) {
           this.nativeWindow= this.serviceWindow.getNativeWindow();
        //this.resetItems();
    }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    resetItems() {
    }

}