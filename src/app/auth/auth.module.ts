import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ]
})
export class AuthModule { }
