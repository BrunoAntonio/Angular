import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  httpGetService() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }

  httpPostService(postTitle: any, postBody: any, postUserId: any) {
    const postData = { title: postTitle, body: postBody, userId: postUserId };
    this.http
      .post<any>('https://jsonplaceholder.typicode.com/posts', postData)
      .subscribe((response) => {
        console.log(response);
      });
  }

}
