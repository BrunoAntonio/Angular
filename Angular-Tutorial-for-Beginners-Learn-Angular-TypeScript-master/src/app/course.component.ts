import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: [ './course.component.css' ]
})
export class CourseComponent implements OnInit {
  
  title = "Users"
  users: any;

  constructor(service: CourseService){
    service.getUsers().subscribe( value => {
        this.users = value
        console.log(value)
      },
    )
  }
  
  ngOnInit(){

  }

}