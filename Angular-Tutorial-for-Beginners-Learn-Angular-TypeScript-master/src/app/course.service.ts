
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class CourseService{

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any>{
    const url = 'https://jsonplaceholder.typicode.com/users'
    return this.http.get<any>(url);
}
  

}