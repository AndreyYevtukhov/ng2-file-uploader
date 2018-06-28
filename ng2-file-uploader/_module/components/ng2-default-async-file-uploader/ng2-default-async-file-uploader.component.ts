import {Component, EventEmitter, forwardRef, Injector, Input, Output} from '@angular/core';
import {Ng2DefaultFileUploaderComponent} from '../ng2-default-file-uploader/ng2-default-file-uploader.component';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {Ng2AsyncFileUploaderConfig} from '../../../_domain/Ng2Config/uploader/async/Ng2AsyncFileUploaderConfig';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Ng2File} from '../../../_domain/Ng2File/Ng2File';
import {INg2FileAdapter} from "../../../_domain/Ng2FileAdapter/INg2FileAdapter";

@Component({
  selector: 'ng2-default-async-file-uploader',
  templateUrl: '../ng2-default-file-uploader/ng2-default-file-uploader.component.html',
  styleUrls: ['../ng2-default-file-uploader/ng2-default-file-uploader.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Ng2DefaultAsyncFileUploaderComponent),
      multi: true
    }
  ]
})
export class Ng2DefaultAsyncFileUploaderComponent extends Ng2DefaultFileUploaderComponent {
  @Input('config') config: Ng2AsyncFileUploaderConfig;
  @Output('isFileProcessing') isFileProcessing: EventEmitter<boolean> = new EventEmitter<boolean>();

  private ng2FileAdapter: INg2FileAdapter;

  constructor(injector: Injector) {
    super(injector);

    this.ng2FileAdapter = this.ng2FileFactory.createFileAdapter();
  }

  protected addFile(file: File) {
    this.isFileProcessing.emit(true);

    let newFile = this.ng2FileFactory.createFile(file);
    this.uploadedFiles.push(newFile);

    const newFileIndex = this.uploadedFiles.length - 1;

    this.ng2FileUploaderService.uploadFile(file, this.config.uploadUrl)
      .subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            newFile.setLoadingProgress(Math.round(100 * event.loaded / event.total));
          } else if (event instanceof HttpResponse) {
            try {
              this.ng2FileAdapter.updateFile(newFile, event.body);

              this.isFileProcessing.emit(false);
              this.propagateChange(this.uploadedFiles);
            } catch (e) {
              this.processUploadError(newFile, newFileIndex);
            }
          }
        },
        error => {
          this.processUploadError(newFile, newFileIndex);
        });
  }

  protected removeFile(fileIndex: number) {
    const file = this.uploadedFiles[fileIndex];
    this.isFileProcessing.emit(true);

    this.ng2FileUploaderService.deleteFile(file, this.config.deleteUrl)
      .subscribe(
        event => {
          this.removeFileFromUploadedFiles(fileIndex);

          if (this.uploadedFiles.length === 0) {
            this.hideFileError()
          }

          this.isFileProcessing.emit(false);
        }, error => {
          this.processDeleteError(file)
        }
      );
  }

  private processUploadError(newFile: Ng2File, newFileIndex: number) {
    this.showFileError(`Error while uploading file [${newFile.name}]`);
    this.removeFileFromUploadedFiles(newFileIndex);
    this.isFileProcessing.emit(false);
  }

  private processDeleteError(file: Ng2File) {
    this.showFileError(`Error while deleting file [${file.name}]`);
    this.isFileProcessing.emit(false);
  }

  private removeFileFromUploadedFiles(newFileIndex: number) {
    this.uploadedFiles.splice(newFileIndex, 1);
    this.propagateChange(this.uploadedFiles);
  }
}
