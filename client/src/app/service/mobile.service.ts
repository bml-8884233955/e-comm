import {Injectable} from '@angular/core';
import {Mobile} from '../mobile';
import {MOBILES} from '../mock-mobile';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()

export class MobileService {
    constructor() {

    }

    getMobiles(): Observable<Mobile[]> {
        return of(MOBILES);
    }


}
