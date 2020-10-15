import { NgModule } from '@angular/core';
import { LoginComponent } from './component/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        LoginComponent
    ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }