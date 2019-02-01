import {
    Component,
    OnInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged  } from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
    searchField: FormControl;
    searches: string[] = [];

    ngOnInit() {
        this.searchField = new FormControl();
        this.searchField.valueChanges
        .pipe(debounceTime(800))
        .pipe(distinctUntilChanged())
        .subscribe(term => {
            this.searches.push(term);
        });
    }
}
