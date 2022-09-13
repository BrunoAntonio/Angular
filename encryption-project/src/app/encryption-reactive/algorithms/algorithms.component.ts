import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, SimpleChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';

import { EncryptionService } from "../../encryption.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  
  @Input() originalMessageFromParent!: string
  @Input() selectedAlgorithmFromParent!: string

  @Output() messageEvent: EventEmitter<string> = new EventEmitter(true)
  
  message!:string;
  messageObservable!:string

  subscription!: Subscription;
  subscriptionObservable!: Subscription;

  messageToParent!:string
  
  constructor(private data: EncryptionService) {
    console.log("Constructor Child")
   }

  ngOnInit(): void {
    console.log("OnInit Child")
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
    
    this.subscriptionObservable = this.data.activatedEmitter.subscribe(message => 
      {this.messageObservable = message
      console.log("Child: " + message)})
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges Child")
    if(this.originalMessageFromParent){
      
      this.messageToParent = this.originalMessageFromParent + " changed"
      this.messageEvent.emit(this.messageToParent)
      
      //this.messageEventObservable.next(this.messageToParent)

      for (const propName in changes) {
        const change = changes[propName];
        const to  = JSON.stringify(change.currentValue);
        const from = JSON.stringify(change.previousValue);
        const changeLog = `Child ${propName}: changed from ${from} to ${to} `;
        console.log(changeLog);
      }
    }
  }

  ngDoCheck(){
    console.log("OnCheck Child")
  }

  ngAfterContentInit(){
    console.log("AfterContentInit Child")
  }

  ngAfterContentChecked(){
  console.log("AfterContentChecked Child")
  }
  
  ngAfterViewInit(){
    console.log("AfterViewInit Child")
  }
  
  ngAfterViewChecked(){
    console.log("AfterViewChecked Child")
  }

  changeData(): string {
    return "This Is A Message From Child"
  }

  ngOnDestroy() {
    console.log("OnDestroy Child")
    this.subscription.unsubscribe();
    //this.subscriptionObservable.unsubscribe()
  }

}

