import { Component, OnInit } from '@angular/core';
import { EncryptionService } from '../encryption.service';
import { Subscription } from 'rxjs';
import { TitleStrategy } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-observable-initial',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableInitialComponent implements OnInit {
  subscription!: Subscription;
  secondSubscription!: Subscription;
  thirdSubcription!: Subscription;
  subscriptionOperator!: Subscription;
  subscriptionSubject1!: Subscription;
  subscriptionSubject2!: Subscription;
  behaviorSubject1!: Subscription;
  behaviorSubject2!: Subscription;
  replaySubject1!: Subscription;
  replaySubject2!: Subscription;

  constructor(public service: EncryptionService) {}

  ngOnInit(): void {
    console.log('----Observables-------------------');
    this.subscription = this.service.observable.subscribe({
      next(x) {
        console.log('First Subscription: ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
    console.log('----------------------------------');

    this.secondSubscription = this.service.observable.subscribe({
      next(x) {
        console.log('Second Subscription: ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
    console.log('--Operators-----------------------');

    this.subscriptionOperator = this.service.observableOperators.subscribe(
      (x) => console.log('Operator: ' + x)
    );

    console.log('--Subject-------------------------');

    this.subscriptionSubject1 = this.service.subject.subscribe((x) =>
      console.log('Subject 1: ' + x)
    );

    this.subscriptionSubject2 = this.service.subject.subscribe((x) =>
      console.log('Subject 2: ' + x)
    );
    this.service.observable.subscribe(this.service.subject);

    console.log('--Behavior Subject-----------------');

    this.behaviorSubject1 = this.service.behaviorSubject.subscribe((x) =>
      console.log('Behavior Subject 1: ' + x)
    );
    this.service.behaviorSubject.next(1);
    this.service.behaviorSubject.next(2);
    console.log('Behavior Subject 2 Connected');
    this.behaviorSubject2 = this.service.behaviorSubject.subscribe((x) =>
      console.log('Behavior Subject 2: ' + x)
    );
    this.service.behaviorSubject.next(3);

    console.log('--Replay Subject-------------------');

    this.replaySubject1 = this.service.replaySubject.subscribe((x) =>
      console.log('Replay Subject 1: ' + x)
    );
    this.service.replaySubject.next(1);
    this.service.replaySubject.next(2);
    console.log('Replay Subject 2 Connected');
    this.replaySubject2 = this.service.replaySubject.subscribe((x) =>
      console.log('Replay Subject 2: ' + x)
    );
    this.service.replaySubject.next(3);

    console.log('---------------------');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.secondSubscription.unsubscribe();
    this.subscriptionOperator.unsubscribe();
    this.subscriptionSubject1.unsubscribe();
    this.subscriptionSubject2.unsubscribe();
    this.behaviorSubject1.unsubscribe();
    this.behaviorSubject2.unsubscribe();
    this.replaySubject1.unsubscribe();
    this.replaySubject2.unsubscribe();
  }

  array: number[] = [];

  onClick() {
    console.log('Click');
    this.secondSubscription = this.service.observable.subscribe((x: number) => {
      this.array.push(x);
    });
  }
}
