import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private httpService: HttpService) {}

  subscriptionGet!: Subscription;

  sum(a: number, b: number) {
    return a + b;
  }

  postsArray: any[] = [];
  appName = 'Before ngOnInit';

  ngOnInit(): void {
    //this.httpService.httpPostService('foo', 'bar', 1);

    this.subscriptionGet = this.httpService
      .httpGetService()
      .subscribe((response) => {
        this.postsArray = response;
        console.log('length: ' + this.postsArray.length);
      });

    this.appName = 'After ngOnInit';
  }

  ngOnDestroy() {
    if (this.subscriptionGet) {
      this.subscriptionGet.unsubscribe();
    }
  }
}
