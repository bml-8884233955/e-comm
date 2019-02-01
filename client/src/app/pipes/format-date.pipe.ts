import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'formatDate'})

export class FormatDate implements PipeTransform {
    transform(value: string): string {
        let newStr = ' ||';
        newStr  = value + newStr;
        return newStr;
    }
}
