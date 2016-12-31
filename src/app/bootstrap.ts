import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {UserService} from './user-service';
import {AppComponent} from './app-component';
import {LoginService} from './login-service';
import {GreetingComponent} from './greeting-component';
import {BorderComponent} from './border-component';

// to manage every dependencies of MyAppModule at once.
// we don't need to declare directives or providers dependent within AppComponent 
@NgModule({
  declarations: [AppComponent, GreetingComponent, BorderComponent],
  providers: [LoginService, UserService],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class MyAppModule{}

platformBrowserDynamic().bootstrapModule(MyAppModule);
