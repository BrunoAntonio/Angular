import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType,
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  subject = new Subject<any>();

  postsArray!: any[];

  post(postTitle: any, postBody: any, postUserId: any) {
    const postData = { title: postTitle, body: postBody, userId: postUserId };
    this.http
      .post<{
        title: string;
        body: string;
        userId: number;
        id: number;
      }>('https://jsonplaceholder.typicode.com/posts', postData)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error.message);
          this.subject.next(error.message);
        }
      );
  }

  get() {
    return this.http
      .get<
        [
          {
            title: String;
            id: number;
          }
        ]
      >('https://jsonplaceholder.typicode.com/posts', {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
      })
      .pipe(
        map((response: any) => {
          const titleArray = [];
          for (const i in response) {
            titleArray.push({ title: response[i]['title'], id: i });
          }
          return titleArray;
        }),
        catchError((errorResp) => {
          return throwError(errorResp);
        })
      );
  }

  getComments() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/comments', {
      headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
      params: new HttpParams().set('postId', 1),
      observe: 'events', //"body", response
      responseType: 'json', 
    });
  }

  delete() {
    return this.http
      .delete('https://jsonplaceholder.typicode.com/posts/1', {
        observe: 'events', //"body", response
        responseType: 'text' // "json"
      })
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type == HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
