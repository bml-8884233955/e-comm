import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-sign-in',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})

export class SignInComponent implements OnInit {
    constructor(private router: Router) {

    }

    private userId: string;
    private pwd: string;
    private msg: string;

    ngOnInit() {

    }

    private userLogin = function () {
        if (this.userId === 'admin' && this.pwd === 'admin') {
            this.router.navigateByUrl('/list');
        } else {
            this.msg = 'Please Enter valid user and pwd';
        }
};

}
