import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-product-search',
    templateUrl: './product-search.component.html'
})

export class ProductSearchComponent {
    constructor(private route: ActivatedRoute,
                private router: Router) {
        this.route.params
            .subscribe(params => this.doSearch(params['term']));
    }

    onSearch(term: string) {
        this.router.navigate(['search', term]);
    }

    doSearch(term: string) {
        console.log(term);
    }
}
