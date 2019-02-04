import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
})

export class ProductDetailComponent {
    constructor(private route: ActivatedRoute) {
        this.route.params
            .subscribe(params => console.log(params));

    }

}
