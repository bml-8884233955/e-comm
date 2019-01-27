import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../user';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        })
  };

@Injectable()

export class SignUpService {
    constructor(
        private http: HttpClient
    ) { }

    private userUrl = '/api/user';

    // getMobiles(): Observable<> {
    //     return of(MOBILES);
    // }

    userSignUp(user: User): Observable<User> {
        console.log(user);
        return this.http.post<User>(this.userUrl, user, httpOptions).
        // tslint:disable-next-line:no-shadowed-variable
        pipe(tap((user: User) => console.log(`added hero w/ id=${user.id}`))
        );
    }

}
