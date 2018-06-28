import {Directive, EventEmitter, HostBinding, HostListener, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[ng2-file-drop-zone]',
})
export class Ng2FileDropZoneDirective implements OnInit {
  /**
   * fires events, when file was processed and validated successfully
   *
   * @type {EventEmitter<any>}
   */
  @Output('fileDropped') fileDropped: EventEmitter<File> = new EventEmitter();

  /**
   * stores current state of drop zone
   *
   * @type {boolean}
   */
  @HostBinding('class.dragover') isDragOver: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('dragenter') onDragEnter() {
    this.isDragOver = true;
  }

  @HostListener('dragleave') onDragLeave() {
    this.isDragOver = false;
  }

  @HostListener('drop', ['$event.dataTransfer.files']) onDrop(files) {
    this.processDroppedFiles(files);
    this.onDragLeave();
  }

  /**
   * validates all files and emits each file, to be processed by uploader
   *
   * @param files
   */
  protected processDroppedFiles(files) {
    Array.from(files).forEach((file: File) => {
      this.fileDropped.emit(file);
    });
  }
}
