import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SignUpService } from '../service/signup.service';
import { User } from '../user';
import { FormGroup, FormControl } from '@angular/forms';




@Component({
    selector: 'app-sign-up',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignUpComponent implements OnInit {
    constructor(
        private router: Router,
        private signUpService: SignUpService) {}
    user: User = new User();
    msg: string;
    langs: string[] = [
        'English',
        'French',
        'German'
    ];
    myForm: FormGroup;

    ngOnInit() {
        this.myForm = new FormGroup({
            name: new FormGroup({
                fName: new FormControl(),
                lName: new FormControl()
            }),
            userId: new FormControl(),
            pwd: new FormControl(),
            email: new FormControl(),
            lang: new FormControl()
        });
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
