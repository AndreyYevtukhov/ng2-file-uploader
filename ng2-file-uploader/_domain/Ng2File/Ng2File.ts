import {IFileData} from './IFileData';
import {INg2File} from "./INg2File";

export class Ng2File implements INg2File {
  loadingProgress: number = 0;
  hash: string;
  nativeFile: IFileData;

  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;

  constructor() {}

  setLoadingProgress(progress: number) {
    if (progress < 0 || progress > 100) {
      throw new Error(`Ng2File progress should be a number and be equal some value in [0-100].
      {${progress}} value was given.`);
    }

    this.loadingProgress = progress;
  }

  getLoadingProgress(): number {
    return this.loadingProgress;
  }

  setHash(hash: string) {
    this.hash = hash;
  }

  getHash(): string {
    return this.hash;
  }

  setNativeFile(file: IFileData) {
    this.nativeFile = file;
  }

  getNativeFile(): IFileData {
    return this.nativeFile;
  }

  /**
   * compares given file with native File of current object.
   * If their names, types and sizes are same => returns true
   *
   * @param {IFileData} file
   * @return {boolean}
   */
  compare(file: IFileData): boolean {
    return this.name === file.name &&
      this.size === file.size &&
      this.type === file.type;
  }
}
