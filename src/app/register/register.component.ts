import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb:FormBuilder, private router: Router) {}

  ngOnInit(){
    this.registerForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required]
    });
  }
  get f() {return this.registerForm.controls};

  submitRegister(data){
    alert(data.fname);
    // submitRegister(data) {
      if(data.fname == 'a' && data.lname =='a') {
        alert("Register Successful");
        this.router.navigate(['/home']);
      }else {
        alert("Register Unsuccessful");
        return;
      }
  }

}
