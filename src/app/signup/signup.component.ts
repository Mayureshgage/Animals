import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  signupForm : FormGroup;
  

  constructor(public fb : FormBuilder) {
     this.signupForm = this.fb.group({
       firstName : ['', Validators.required],
       lastName : ['', Validators.required],
       gender : ['', Validators.required],
       phoneNumber : [null, [Validators.required, Validators.pattern("/^\d{10}$/")]],
       emailId : ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
       password: [null, [Validators.required, Validators.minLength(8)]],
       confirmPassword: [null, [Validators.required, Validators.minLength(8)]]
     });
    
   }

  ngOnInit(): void {
  }

}
