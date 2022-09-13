import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  data = ['a', 'b', 'c', 'd', 'e'];

  constructor() {}

  ngOnInit(): void {}

  item!: any;
  index!: any;
  show(item: any, i: any) {
    console.log('index: ' + i + '- item: ' + item);
    this.item = item;
    this.index = i;
  }

  forward() {
    if (this.index >= 0 && this.index <= this.data.length - 2) {
      this.index = this.index + 1;
      this.item = this.data[this.index];
    } else {
      this.index = 0;
      this.item = this.data[this.index];
    }
  }

  backward() {
    if (this.index >= 1 && this.index <= this.data.length-1) {
      this.index = this.index - 1;
      this.item = this.data[this.index];
    } else {
      this.index = this.data.length-1;
      this.item = this.data[this.index];
    }
  }
}
