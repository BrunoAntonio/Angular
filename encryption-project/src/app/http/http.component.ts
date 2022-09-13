import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-final',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class ObservableFinalComponent implements OnInit, OnDestroy {
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  subscription!: Subscription;
  subscriptionGet!: Subscription;
  subscriptionGetComments!: Subscription;
  subscriptionDelete!: Subscription

  error = null;
  onPost() {
    this.subscription = this.httpService.subject.subscribe((errorMessage) => {
      this.error = errorMessage;
    });

    this.httpService.post('foo', 'bar', 1);
  }

  postsArray!: any[];
  onGet() {
    this.subscriptionGet = this.httpService.get().subscribe(
      (response) => {
        this.postsArray = response;
        console.log(response);
      },
      (error) => {
        this.error = error.message;
        console.log(error.message);
      }
    );
  }

  onGetComments() {
    this.subscriptionGetComments = this.httpService
      .getComments()
      .subscribe((comments) => {
        console.log(comments);
      });
  }

  onDelete(){
    this.subscriptionDelete = this.httpService.delete().subscribe()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionGet.unsubscribe();
    this.subscriptionGetComments.unsubscribe();
    this.subscriptionDelete.unsubscribe()
  }
}
