import {Component, OnInit} from '@angular/core';
// import {MOBILES} from '../mock-mobile';
import {MobileService} from '../service/mobile.service';


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['product-list.component.css']

})

export class ProductListComponent implements OnInit {
    private mobiles;

    constructor(private mobileService: MobileService) {

    }

    ngOnInit() {
        this.getMobiles();
    }

    getMobiles(): void {
        this.mobileService.getMobiles()
                        .subscribe(mobiles => this.mobiles = mobiles);
    }
}
