import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SignUpService } from '../service/signup.service';
import { User } from '../user';
import { FormGroup,
         FormControl,
         Validators} from '@angular/forms';




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
    myform: FormGroup;
    fName: FormControl;
    lName: FormControl;
    email: FormControl;
    pwd: FormControl;
    lang: FormControl;
    langs: string[] = [
        'English',
        'French',
        'German'
    ];
    myForm: FormGroup;

    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }
    createFormControls() {
        this.fName =  new FormControl('', Validators.required );
        this.lName = new FormControl('', Validators.required);
        this.email = new FormControl('', [
            Validators.required,
            Validators.pattern('[^@]*@[^@]*')
        ]);
        this.pwd = new FormControl('', [
            Validators.required,
            Validators.minLength(8)
         ]);
        this.lang = new FormControl('Language');
    }

    createForm() {
        this.myForm = new FormGroup({
            name: new FormGroup({
                fName: this.fName,
                lName: this.lName,
            }),
            email: this.email,
            pwd: this.pwd,
            lang: this.lang
        });
    }

    onSubmit() {
        if (this.myForm.valid) {
            console.log('Form Submitted', this.myForm.value);
            this.myForm.reset();
        }
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
