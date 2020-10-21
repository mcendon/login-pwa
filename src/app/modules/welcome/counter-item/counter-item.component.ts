import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-item',
  template: ` <h1>
      {{ value | zerofill: 2 }}
    </h1>
    <small>{{ label }}</small>`,
  styles: [
    `
      :host {
        display: inline-block;
        padding: 18px;
        color: #777;
      }
      small {
        display: block;
      }
    `,
  ],
})
export class CounterItemComponent implements OnInit {
  @Input() label: string;
  @Input() value: string;

  constructor() {}

  ngOnInit(): void {}
}
