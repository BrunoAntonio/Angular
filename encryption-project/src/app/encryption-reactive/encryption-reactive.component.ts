import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, OnDestroy, OnChanges, SimpleChanges, AfterContentChecked, AfterContentInit, AfterViewChecked, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlgorithmsComponent } from './algorithms/algorithms.component';

import { EncryptionService } from "../encryption.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-encryption',
  templateUrl: './encryption-reactive.component.html',
  styleUrls: ['./encryption-reactive.component.css']
})
export class EncryptionReactiveComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  form: FormGroup
  originalMessage!: string 
  selectedAlgorithm: string = ""
  submitted = false

  messageFromChild: string = ""
  @ViewChild(AlgorithmsComponent, { static: false}) child: any

  message!: string
  subscription!: Subscription;
  subscriptionObservable!: Subscription;

  finalMessage!: string 

  constructor(private formBuilder: FormBuilder, 
              private changeDetector: ChangeDetectorRef,
              private data: EncryptionService, ) {
    
      this.form = this.formBuilder.group({
      originalMessage: ["",Validators.required],
      selectedAlgorithm: [""]
    })
    console.log("Constuctor Parent")
  }

  ngOnInit(): void {
    console.log("OnInit Parent")
    this.originalMessage = ""
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)

  }

  get fval() {
    //console.log(this.form.controls)
    return this.form.controls;
    }

  counter: number =1
  onSubmit(){
    this.submitted = true;
    
    if (this.form.invalid) {
      console.log(this.form)
      return;
    }

    //console.log('form fields are validated successfully!');
  
    this.originalMessage = this.form.get("originalMessage")?.value
    this.selectedAlgorithm = this.form.get("selectedAlgorithm")?.value
    //console.log(this.originalMessage)
    //console.log(this.selectedAlgorithm)
    this.data.changeMessage("Message From Service " + this.counter)
    this.data.changeMessageObservable("Message From Observable " + 2*this.counter)
    this.counter +=1

  }

  ngOnChanges(changes: SimpleChanges){
    console.log("OnChanges Parent")

    for (const propName in changes) {
      const change = changes[propName];
      const to  = JSON.stringify(change.currentValue);
      const from = JSON.stringify(change.previousValue);
      const changeLog = `Parent ${propName}: changed from ${from} to ${to} `;
      console.log(changeLog);
    }   
  }

  ngDoCheck(): void {
    console.log("DoCheck Parent")
  }

  ngAfterContentInit(): void {
    console.log("AfterContentInit Parent")
  }
  
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked Parent")
  }

  ngAfterViewInit() {
    this.messageFromChild = this.child.changeData()
    //console.log("From Child: " + this.child.changeData())
    this.changeDetector.detectChanges();
    console.log("AfterViewInit Parent")
  }

  ngAfterViewChecked(): void {
    console.log("AfterViewChecked Parent")
  }

  receiveMessage(event: string) {
    this.finalMessage = event
  }

  ngOnDestroy() {
    console.log("OnDestroy Parent")
    this.subscription.unsubscribe()
  }

}