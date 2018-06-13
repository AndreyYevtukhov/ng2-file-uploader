import {Ng2File} from './Ng2File';
import {IFileData} from './IFileData';

/**
 * builds Ng2File objects
 */
export class Ng2FileBuilder {
  /**
   * builds file, that has been added by user, but hasn't been loaded yet
   *
   * @param {IFileData} fileData
   * @return {Ng2File}
   */
  buildFile(fileData: IFileData): Ng2File {
    return this.buildFilePart(fileData);
  }

  /**
   * builds file, that has been already loaded
   * (can be used in edit forms, etc.)
   *
   * @param {IFileData} fileData
   * @return {Ng2File}
   */
  buildLoadedFile(fileData: IFileData): Ng2File {
    let ng2File = this.buildFilePart(fileData);

    ng2File.loadingProgress = 100;

    return ng2File;
  }

  /**
   * builds File part of Ng2File object
   *
   * @param {IFileData} fileData
   * @return {Ng2File}
   */
  private buildFilePart(fileData: IFileData): Ng2File {
    let ng2File = new Ng2File();

    ng2File.name = fileData.name;
    ng2File.type = fileData.type;
    ng2File.size = fileData.size;
    ng2File.lastModifiedDate = fileData.lastModifiedDate;

    // save native File object
    if (fileData instanceof File) {
      ng2File.nativeFile = fileData;
    }

    return ng2File;
  }
}
