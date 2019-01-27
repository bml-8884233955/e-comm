import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SignUpService } from '../service/signup.service';
import { User } from '../user';




@Component({
    selector: 'app-sign-up',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignUpComponent implements OnInit {
    constructor(
        private router: Router,
        private signUpService: SignUpService) {}
    private user: User = new User();
    private msg: string;

    ngOnInit() {
    }

    private userSignUp () {
        if (!this.user.userId) {
            this.msg = 'Please Enter Mandatory Fields';
        } else {
            console.log(this.user);
            this.signUpService.userSignUp(this.user)
            .subscribe(user => {
                this.router.navigateByUrl('/list');
            });
        }
    }
}
