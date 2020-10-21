import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [
    `
      :host {
        display: block;
        padding: 10px;
      }
    `,
  ],
})
export class CounterComponent implements OnInit {
  @Input() time: number;
  private counter;
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  constructor() {}

  ngOnInit(): void {
    this.setTime();
  }

  ngOnDestroy(): void {
    clearTimeout(this.counter);
  }

  setTime = () => {
    let duration = moment.duration(this.time);
    this.days = duration.days();
    this.hours = duration.hours();
    this.minutes = duration.minutes();
    this.seconds = duration.seconds();
    this.time += 1000;
    this.counter = setTimeout(() => {
      this.setTime();
    }, 1000);
  };
}
