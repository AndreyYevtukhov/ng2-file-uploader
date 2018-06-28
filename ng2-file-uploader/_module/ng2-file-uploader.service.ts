import {Injectable} from '@angular/core';
import {IFileRequirements} from '../_domain/Ng2File/IFileRequirements';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Ng2File} from '../_domain/Ng2File/Ng2File';

@Injectable()
export class Ng2FileUploaderService {

  constructor(private httpClient: HttpClient) {
    /**
     * fix for some browsers that will open dropped file, if they can open it
     * e.g. images, pdf etc.
     *
     * more details ->
     * https://stackoverflow.com/questions/6756583/prevent-browser-from-loading-a-drag-and-dropped-file
     */
    window.addEventListener('dragover', function (e) {
      e.preventDefault();
    }, false);

    window.addEventListener('drop', function (e) {
      e.preventDefault();
    }, false);
  }

  uploadFile(file: File, uploadUrl: string): Observable<any> {
    if (!uploadUrl) {
      throw new Error(`[uploadUrl] is not defined! Check async file uploader config!`);
    }

    let formData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', uploadUrl, formData, {
      reportProgress: true,
    });

    return this.httpClient.request(req);
  }

  deleteFile(file: Ng2File, deleteUrl: string): Observable<any> {
    if (!deleteUrl) {
      throw new Error(`[deleteUrl] is not defined! Check async file uploader config!`);
    }

    return this.httpClient.delete(`${deleteUrl}/${file.hash}`);
  }

  /**
   * validates file, and returns error message, if error has been found
   *
   * @param {File} file
   * @param fileRequirements
   * @return {string}
   */
  validateFile(file: File, fileRequirements: IFileRequirements): string {
    let fileExtension = file.name.split('.').pop();

    if (fileRequirements.minSizeBytes && file.size < fileRequirements.minSizeBytes.value) {
      return fileRequirements.minSizeBytes.errorMessage;
    }

    if (fileRequirements.maxSizeBytes && file.size > fileRequirements.maxSizeBytes.value) {
      return fileRequirements.maxSizeBytes.errorMessage;
    }

    if (fileRequirements.types && fileRequirements.types.value.indexOf(file.type) === -1) {
      return fileRequirements.types.errorMessage;
    }

    if (fileRequirements.extension && fileRequirements.extension.value.indexOf(fileExtension) === -1) {
      return fileRequirements.extension.errorMessage;
    }
  }
}
