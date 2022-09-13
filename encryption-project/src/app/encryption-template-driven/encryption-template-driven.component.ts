import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-encryption',
  templateUrl: './encryption-template-driven.component.html',
  styleUrls: ['./encryption-template-driven.component.css']
})
export class EncryptionTemplateDrivenComponent implements OnInit {

  originalMessage: string = ""
  originalMessage1: string = "From Component To View"
  originalMessage2: string | null = ""

  constructor() {
 
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Two Way :" + this.originalMessage)
    console.log("One Way: " + this.originalMessage1)
    console.log("One Way: " + this.originalMessage2)
  }

}
