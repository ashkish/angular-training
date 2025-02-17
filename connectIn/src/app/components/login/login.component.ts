import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl, FormsModule, NgModel, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { Auth } from '../../services/auth.service';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, LoadingComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  @ViewChild('emailInputRef')
  emailInputRef!: ElementRef;
  loading: boolean =  false;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: Auth
  ){}
  ngOnInit(): void {
   this.authService.isAuthenticated().subscribe({
    next: (result) => {
      this.loading = result;
    },
    error: (err) => {
      console.log("Authentication Required");
    }
   });
  }
  
  onSubmit() {
    console.log('Login Form Data:', this.loginForm.value);
  }
  
  loginWithAuth0() {
    console.log(this.authService);
    this.loading = true;
    this.authService.loginWithAuth0();
  }
}
