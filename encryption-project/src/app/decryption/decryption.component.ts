import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';

import { EncryptionService } from "../encryption.service";
import { Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-decryption',
  templateUrl: './decryption.component.html',
  styleUrls: ['./decryption.component.css']
})
export class DecryptionComponent implements OnInit {

  message!:string;
  messageObservable!:string

  subscription!: Subscription;
  subscriptionObservable!: Subscription;

  constructor(private data: EncryptionService) { 
  }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(message => 
      {this.message = message
      console.log("Service Decryption: " + message)})
    //console.log("Message From Service: " + this.message)

    this.subscriptionObservable = this.data.activatedEmitter
    .pipe(
      map(data => {return (data + "-100")}))
    .subscribe(message => 
      {this.messageObservable = message
      console.log("Observable Decryption: " + message)})

    //console.log("Message From Observable: " + this.messageObservable)
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionObservable.unsubscribe()
  }

  counter: number =1
  onSubmit(){
    this.data.changeMessageObservable("Message From Observable " + 2*this.counter)
    this.data.changeMessage("Message From Service " + this.counter)
    this.counter +=1
  }


}
