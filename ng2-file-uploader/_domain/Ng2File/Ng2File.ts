import {IFileData} from './IFileData';

/**
 * represents Ng2File for uploader module
 * can store native File object
 */
export class Ng2File implements IFileData {
  private _loadingProgress: number = 0;
  private _hash: string;
  private _nativeFile: IFileData;

  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;

  constructor() {}

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

  // getters and setters
  get hash(): string {
    return this._hash;
  }

  set hash(value: string) {
    this._hash = value;
  }

  get loadingProgress(): number {
    return this._loadingProgress;
  }

  set loadingProgress(progress: number) {
    if (progress < 0 || progress > 100) {
      throw new Error(`Ng2File progress should be a number and be equal some value in [0-100].
      {${progress}} value was given.`);
    }

    this._loadingProgress = progress;
  }

  get nativeFile(): IFileData {
    return this._nativeFile;
  }

  set nativeFile(value: IFileData) {
    this._nativeFile = value;
  }
}
