import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { CourseService } from './course.service';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, CourseComponent],
  providers: [CourseService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }