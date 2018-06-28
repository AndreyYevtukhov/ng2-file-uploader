import {INg2File} from "../Ng2File/INg2File";

export interface INg2FileAdapter {
  updateFile(file: INg2File, updateData: any);
}