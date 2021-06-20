import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'image-dropzone',
  templateUrl: './image-dropzone.component.html',
  styleUrls: ['./image-dropzone.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: ImageDropzoneComponent
    }
  ]
})
export class ImageDropzoneComponent implements OnInit, ControlValueAccessor {
  @Input() imageUrl: string;
  @Input() file: any;
  @Input() width: string = '100px'
  @Input() height: string = '100px'
  dirty: boolean = false;
  disabled: boolean = false;

  @Output() imageUrlChange = new EventEmitter();

  isImageLoading:boolean = false;

  fileReader:FileReader = new FileReader()

  constructor() { }
  writeValue(obj: any): void {
    this.imageUrl = obj;
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
    this.fileReader.onload = () => {
      this.imageUrl = this.fileReader.result?.toString();
      this.isImageLoading = false;
      this.onChange(this.imageUrl)
    }
  }

  onFileDropped(files) {
    this.file = files[0]
    this.isImageLoading = true;
    this.fileReader.readAsDataURL(files[0])
  }

  onRemoveImage() {
    this.file = null;
    this.imageUrl = null;
    this.onChange(null)
  }

  onFileUpload(event) {
    this.onFileDropped(event.target.files)
  }

  onChange(value) {
    this.imageUrlChange.emit(value)
  }
}
