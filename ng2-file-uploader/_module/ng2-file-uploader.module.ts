import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Ng2FileInputComponent} from './components/ng2-file-input/ng2-file-input.component';
import {Ng2FileDropZoneDirective} from './directives/ng2-file-dropzone/ng2-file-drop-zone.directive';
import {Ng2FileInfoComponent} from './components/ng2-file-info/ng2-file-info.component';
import {Ng2FileUploaderService} from './ng2-file-uploader.service';
import {Ng2DefaultFileUploaderComponent} from './components/ng2-default-file-uploader/ng2-default-file-uploader.component';
import { FileSizePipe } from './pipes/file-size.pipe';
import { Ng2DefaultAsyncFileUploaderComponent } from './components/ng2-default-async-file-uploader/ng2-default-async-file-uploader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Ng2FileInputComponent,
    Ng2FileDropZoneDirective,
    Ng2FileInfoComponent,
    Ng2DefaultFileUploaderComponent,
    Ng2DefaultAsyncFileUploaderComponent,
    FileSizePipe
  ],
  exports: [
    Ng2FileInputComponent,
    Ng2FileDropZoneDirective,
    Ng2FileInfoComponent,
    Ng2DefaultFileUploaderComponent,
    Ng2DefaultAsyncFileUploaderComponent,
    FileSizePipe
  ],
  providers: [
    Ng2FileUploaderService
  ]
})
export class Ng2FileUploaderModule {
}
