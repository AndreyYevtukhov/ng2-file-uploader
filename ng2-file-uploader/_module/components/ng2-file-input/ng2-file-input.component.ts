import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Ng2FileInputConfig} from '../../../_domain/Ng2Config/file-input/Ng2FileInputConfig';

@Component({
  selector: 'ng2-file-input',
  templateUrl: './ng2-file-input.component.html',
  styleUrls: ['./ng2-file-input.component.scss']
})
export class Ng2FileInputComponent implements OnInit {
  @Input('config') config: Ng2FileInputConfig;
  @Output('fileLoaded') fileLoaded: EventEmitter<File> = new EventEmitter();
  @ViewChild('fileInput') fileInputEl: any;

  constructor() {
  }

  ngOnInit() {
  }

  protected processSelectedFiles($event) {
    Array.from($event.target.files).forEach((file: File) => {
        this.fileLoaded.emit(file);
    });

    this.clearFileInputValue();
  }

  /**
   * prevents bug with deleting and adding of the same file
   */
  private clearFileInputValue() {
    this.fileInputEl.nativeElement.value = '';
  }
}
