import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-item',
  template: ` <h1 class="number">
      {{ value | zerofill: 2 }}
    </h1>
    <small class="label">{{ label }}</small>`,
  styles: [
    `
      :host {
        display: inline-block;
        padding: 10px;
        color: #777;
      }
      .number {
        font-size: 2em;
      }
      .label {
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
