import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    isLogin: boolean = true;
    userName = "";
    userError: boolean = false;
    userText: any = "";
    passward: any = "";
    passError: boolean = false;
    passText: any = "";

    constructor(private router: Router) { }

    ngOnInit() {

    }

    login() {
        let count = 0;
        if (this.userName.trim() === "") {
            this.userText = "Username is required !!";
            this.userError = true;
        } else if (this.userName.trim() === "username") {
            this.userText = "";
            this.userError = false;
            count++;
        } else {
            this.userText = "Username is wrong !!";
            this.userError = true;
        }

        if (this.passward.trim() === "") {
            this.passText = "Password is required !!";
            this.passError = true;
        } else if (this.passward.trim() === "password") {
            this.passText = "";
            this.userError = false;
            count++;
        } else {
            this.passText = "Password is wrong !!";
            this.passError = true;
        }

        if (count === 2) {
            this.router.navigate(['/dashboard']);
        }
    }

    register() {
        let count = 0;
        if (this.userName.trim() === "") {
            this.userText = "Username is required !!";
            this.userError = true;
        } else if (this.userName.trim() === "username") {
            this.userText = "";
            this.userError = false;
            count++;
        } else {
            this.userText = "Username is wrong !!";
            this.userError = true;
        }

        if (this.passward.trim() === "") {
            this.passText = "Password is required !!";
            this.passError = true;
        } else if (this.passward.trim() === "password") {
            this.passText = "";
            this.userError = false;
            count++;
        } else {
            this.passText = "Password is wrong !!";
            this.passError = true;
        }

        if (count === 2) {
            this.userError = false;
            this.passError = false;
            this.isLogin = true;
        }
    }

    registerLink() {
        this.isLogin = false;
    }
}
