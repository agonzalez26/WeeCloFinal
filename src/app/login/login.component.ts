import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb:FormBuilder, private router: Router) {}

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() {return this.loginForm.controls};

  submitLogin(data){
    alert(data.email);
    // submitRegister(data) {
      if(data.email == 'a' && data.password =='a') {
        alert("Login Successful");
        this.router.navigate(['/home']);
      }else {
        alert("Login Unsuccessful");
        return;
      }
  }

}
