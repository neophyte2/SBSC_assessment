import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AuthModule { }
