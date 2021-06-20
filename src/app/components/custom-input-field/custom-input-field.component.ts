import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-input-field',
  templateUrl: './custom-input-field.component.html',
  styleUrls: ['./custom-input-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: CustomInputFieldComponent
    }
  ]
})
export class CustomInputFieldComponent implements OnInit, ControlValueAccessor {
  @Input() label: string = "";
  @Input() labelMinWidth:string;
  @Input() placeholder: string = "";
  @Input() rows: number = 1;
  @Input() maxLength: number;
  @Input() autoResize: boolean = true;
  @Input() value: string = "";
  @Input() disabled: boolean = false;
  @Input() dirty: boolean = false;
  
  @Output() valueChange:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onChange(value) {
    this.valueChange.emit(value)
  }

  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.dirty = true;
    fn(this.dirty)
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
  }

}
