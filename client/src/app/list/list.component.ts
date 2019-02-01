import {Component, OnInit, Input} from '@angular/core';
import {Mobile} from '../mobile';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html'
})

export class ListComponent implements OnInit {
    @Input() mobile: Mobile;

    constructor() {

    }

    ngOnInit() {

    }
}

