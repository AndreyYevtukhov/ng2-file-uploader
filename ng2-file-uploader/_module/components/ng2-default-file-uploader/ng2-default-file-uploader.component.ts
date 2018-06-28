import {Component, EventEmitter, forwardRef, Injector, Input, Output, OnInit, Type} from '@angular/core';
import {Ng2File} from '../../../_domain/Ng2File/Ng2File';
import {Ng2FileFactory} from '../../../_domain/Ng2FileFactory/Ng2FileFactory';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';
import {Ng2FileUploaderService} from '../../ng2-file-uploader.service';
import {Ng2DefaultFileUploaderConfig} from '../../../_domain/Ng2Config/uploader/default/Ng2DefaultFileUploaderConfig';
import {Ng2FileUploaderConfigBuilder} from '../../../_domain/Ng2Config/uploader/Ng2FileUploaderConfigBuilder';
import {INg2FileFactory} from "../../../_domain/Ng2FileFactory/INg2FileFactory";
import {INg2File} from "../../../_domain/Ng2File/INg2File";
import {INg2FileAdapter} from "../../../_domain/Ng2FileAdapter/INg2FileAdapter";

@Component({
  selector: 'ng2-default-file-uploader',
  templateUrl: './ng2-default-file-uploader.component.html',
  styleUrls: ['./ng2-default-file-uploader.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Ng2DefaultFileUploaderComponent),
      multi: true
    }
  ]
})
export class Ng2DefaultFileUploaderComponent implements ControlValueAccessor, OnInit {
  @Input('config') config: Ng2DefaultFileUploaderConfig = Ng2FileUploaderConfigBuilder.buildDefaultConfig();
  @Output('selectedFile') selectedFile: EventEmitter<File> = new EventEmitter();

  public validationError: string;
  public uploadedFiles: Array<INg2File>;
  protected ng2FileFactory: INg2FileFactory;
  protected ng2FileAdapter: INg2FileAdapter;
  protected ng2FileUploaderService: Ng2FileUploaderService;
  private errorTimer;

  constructor(injector: Injector) {
    this.ng2FileUploaderService = injector.get<Ng2FileUploaderService>(Ng2FileUploaderService);
  }

  ngOnInit() {
    this.ng2FileFactory = (this.config.fileFactory)
      ? this.config.fileFactory
      : new Ng2FileFactory();

    this.ng2FileAdapter = this.ng2FileFactory.createFileAdapter();
  }

  writeValue(files?: Array<Ng2File>): void {
    this.uploadedFiles = files;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  propagateChange(_: any): void {
  }

  propagateTouch(): void {
  }

  uploadFile(file: File) {
    this.selectedFile.emit(file);

    this.propagateTouch();
    this.hideFileError();

    if (this.uploadedFiles.length >= 1 && this.hasSameFile(file)) {
      return;
    }

    let fileValidationError = this.ng2FileUploaderService.validateFile(file, this.config.fileRequirements);

    if (!fileValidationError) {
      this.addFile(file);
    } else {
      this.showFileError(fileValidationError);
    }
  }

  deleteFile(file: Ng2File) {
    this.propagateTouch();

    let fileIndex = this.uploadedFiles.indexOf(file);

    if (fileIndex > -1) {
      this.removeFile(fileIndex);
    } else {
      throw new Error(`Ng2File hasn't been found in uploadedFiles!`);
    }
  }

  protected hasSameFile(file: File): boolean {
    return this.uploadedFiles.some(uploadedFile => {
      if (uploadedFile.compare(file)) {
        this.showFileError("This file has already been loaded.");
        return true;
      }
    });
  }

  protected addFile(file: File) {
    this.uploadedFiles.push(this.ng2FileFactory.createLoadedFile(file));
    this.propagateChange(this.uploadedFiles);
  }

  protected removeFile(fileIndex) {
    this.uploadedFiles.splice(fileIndex, 1);
    this.propagateChange(this.uploadedFiles);

    if (this.uploadedFiles.length === 0) {
      this.hideFileError()
    }
  }

  protected showFileError(error: string) {
    clearTimeout(this.errorTimer);

    this.validationError = error;

    this.errorTimer = setTimeout(() => {
      this.hideFileError();
    }, 4000)
  }

  protected hideFileError() {
    this.validationError = '';
  }
}
