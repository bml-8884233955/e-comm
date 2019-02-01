import {Component, OnInit, Input} from '@angular/core';
import {Mobile} from '../mobile';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'
})

export class ProductsComponent implements OnInit {
    @Input() mobile: Mobile;

    constructor() {

    }

    ngOnInit() {

    }
}

