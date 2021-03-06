import {Ng2File} from '../Ng2File/Ng2File';
import {IFileData} from '../Ng2File/IFileData';
import {INg2FileFactory} from "./INg2FileFactory";
import {Ng2FileAdapter} from "../Ng2FileAdapter/Ng2FileAdapter";

/**
 * builds Ng2File objects
 */
export class Ng2FileFactory implements INg2FileFactory {
  /**
   * builds file, that has been added by user, but hasn't been loaded yet
   *
   * @param {IFileData} fileData
   * @return {Ng2File}
   */
  createFile(fileData: IFileData): Ng2File {
    return this.buildFilePart(fileData);
  }

  /**
   * builds file, that has been already loaded
   * (can be used in edit forms, etc.)
   *
   * @param {IFileData} fileData
   * @return {Ng2File}
   */
  createLoadedFile(fileData: IFileData): Ng2File {
    let ng2File = this.buildFilePart(fileData);

    ng2File.setLoadingProgress(100);

    return ng2File;
  }

  createFileAdapter(): Ng2FileAdapter {
    return new Ng2FileAdapter();
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

    // save native File object
    if (fileData instanceof File) {
      ng2File.setNativeFile(fileData);
    }

    return ng2File;
  }
}
