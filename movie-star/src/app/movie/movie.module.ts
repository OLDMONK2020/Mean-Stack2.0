import { NgModule } from '@angular/core';
import { MovieComponent } from './component/movie.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        MovieComponent
    ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserModule
  ],
  exports: [MovieComponent]
})
export class MovieModule { }