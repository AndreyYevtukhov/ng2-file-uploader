import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Ng2File} from '../../../_domain/Ng2File/Ng2File';

@Component({
  selector: 'ng2-file-info',
  templateUrl: './ng2-file-info.component.html',
  styleUrls: ['./ng2-file-info.component.scss']
})
export class Ng2FileInfoComponent implements OnInit {
  @Input('file') file: Ng2File;
  @Output('fileDeleted') fileDeleted: EventEmitter<Ng2File> = new EventEmitter<Ng2File>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * process delete file button click event
   */
  deleteFile() {
    this.fileDeleted.emit(this.file);
  }
}
