import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, RedirectLoginOptions } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  constructor(
    private auth0: AuthService,
    private router: Router
  ) {}
  
  isAuthenticated(): Observable<boolean> {
    return this.auth0.isAuthenticated$;
  }
  
  options: RedirectLoginOptions<{ target: string }> = {
    appState: { target: '/project' }
  }
  
  loginWithAuth0() {
    this.handleRedirectCallback();
    this.auth0.loginWithRedirect(this.options);

  }
  
  handleRedirectCallback(): void {
    this.auth0.handleRedirectCallback().subscribe({
      next: () => {
        console.log("dsvsegbwerg");
        this.router.navigate(['/loading']);
      },
      error: (err) => {
        console.error('Redirect callback error', err);
      },
    })
  }
}