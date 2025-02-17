import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideAuth0 } from '@auth0/auth0-angular';
// import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

const auth0Config = {
  domain:'dev-j2n2r576ujfzv5hg.us.auth0.com',
  clientId:'59ZiMiL39qPPM6wuca2MxkJETwaQj5U6',
  authorizationParams: {
    redirect_uri: `${window.location.origin}/project`
  }
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideAuth0(auth0Config),
  ]
};
