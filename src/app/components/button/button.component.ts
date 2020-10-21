import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button
    [type]="type"
    class="btn btn-primary btn-block"
    (click)="(click)"
  >
    {{ text }}
  </button>`,
  styles: [
    `
      :host {
        width: 40%;
      }
    `,
  ],
})
export class ButtonComponent implements OnInit {
  @Input() type: string;
  @Input() text: string;
  @Output() click: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() {}

  ngOnInit(): void {}
}
