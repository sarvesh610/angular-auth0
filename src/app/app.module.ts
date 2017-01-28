import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { routing, appRoutingProviders } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Auth } from './services/auth/auth.service';
import { AuthGuard } from './app.guard';
/**
Work-Around for the Error due to Auth0 below: (https://github.com/auth0/angular2-jwt/issues/258 Used Option 2)
========================================================================================================
ERROR in Error encountered resolving symbol values statically. Only initialized variables and constants
can be referenced because the value of this variable is needed by the template compiler

Another Error with Zone JS was fixed using

npm i --save zone.js@0.7.2
*/

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    Auth,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
