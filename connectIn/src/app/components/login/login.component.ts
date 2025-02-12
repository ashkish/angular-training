import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import {FormGroup, FormControl, FormsModule, NgModel, ReactiveFormsModule, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('emailInputRef')
  emailInputRef!: ElementRef;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  
  constructor(private formBuilder: FormBuilder){}
  
  onSubmit() {
    console.log('Login Form Data:', this.loginForm.value);
  }
  
  // ngAfterViewChecked() {
  //   if (this.emailInputRef && this.emailInputRef.nativeElement) {
  //     this.emailInputRef.nativeElement.focus();
  //   }
  // }
}
