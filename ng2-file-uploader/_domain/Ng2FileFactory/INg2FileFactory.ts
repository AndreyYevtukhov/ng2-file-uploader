import {IFileData} from "../Ng2File/IFileData";
import {INg2File} from "../Ng2File/INg2File";
import {INg2FileAdapter} from "../Ng2FileAdapter/INg2FileAdapter";

export interface INg2FileFactory {
  createFile(fileData: IFileData): INg2File;
  createLoadedFile(fileData: IFileData): INg2File;
  createFileAdapter(): INg2FileAdapter;
}