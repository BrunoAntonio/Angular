import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  ReplaySubject,
  Observable,
  of,
  pipe,
  Subscriber,
  Subject,
  from,
  asyncScheduler,
} from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  //activatedEmitter = new Subject<any>();
  activatedEmitter = new ReplaySubject<any>(1);

  constructor() {}

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeMessageObservable(message: string) {
    this.activatedEmitter.next(message);
  }

  //////////////////////////////////////////////////////////////////////////////////////////

  customPipe = pipe(
    filter((x: any) => x >= 2),
    map((x: any) => x * x)
  );

  observable = new Observable<number>((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
  });

  observableOperators = of(1, 2, 3).pipe(
    filter((x: number) => {
      return x >= 2;
    }),
    map((x: number) => {
      return x * x;
    })
  );

  subject = new Subject<any>();
  behaviorSubject = new BehaviorSubject(0); // 0 is the initial value
  replaySubject = new ReplaySubject(2); // buffer 2 values for new subscribers
}
