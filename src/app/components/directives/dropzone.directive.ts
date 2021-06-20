import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[dropzone]'
})
export class DropzoneDirective {
  @HostBinding('class.fileover') fileOver:boolean;
  @Output() fileDropped = new EventEmitter()

  constructor() { }

  @HostListener('dragover', ['$event']) onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = true;
  }

  @HostListener('dragleave', ['$event']) onDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = false;
  }

  @HostListener('drop', ['$event']) onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = false;

    const files = event.dataTransfer.files;
    if(files.length > 0) {
      this.fileDropped.emit(files)
    }
  }
}
