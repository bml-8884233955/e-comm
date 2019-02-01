import {Component, OnInit} from '@angular/core';
// import {MOBILES} from '../mock-mobile';
import {MobileService} from '../service/mobile.service';


@Component({
    selector: 'app-list-display',
    templateUrl: './list-display.component.html',
    styleUrls: ['list-display.component.css']

})

export class ListDisplayComponent implements OnInit {
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
