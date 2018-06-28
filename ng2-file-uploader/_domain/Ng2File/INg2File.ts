import {IFileData} from "./IFileData";

/**
 * describes base fields and methods that Ng2FileUploader
 * needs for correct work
 */
export interface INg2File extends IFileData {
  loadingProgress: number;
  hash: string;
  nativeFile: IFileData;

  setLoadingProgress(progress: number);
  getLoadingProgress(): number;
  setHash(hash: string): void;
  getHash(): string;
  setNativeFile(file: IFileData);
  getNativeFile(): IFileData;
  compare(file: IFileData): boolean;
}