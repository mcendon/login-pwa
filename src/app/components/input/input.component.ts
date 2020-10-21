import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() type: string;
  @Input() placeholder: string;
  @Input() formControlName: string;
  @Input() isInvalid: boolean;
  @Input() invalidText: string;

  isDisabled: boolean = false;
  input: any;
  onChange: any;
  onTouched: any;

  constructor() {}

  writeValue(obj: any): void {
    this.input = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnInit(): void {}
}
