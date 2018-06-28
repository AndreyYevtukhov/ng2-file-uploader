import {INg2FileAdapter} from "./INg2FileAdapter";
import {Ng2File} from "../Ng2File/Ng2File";

export class Ng2FileAdapter implements INg2FileAdapter {
  updateFile(file: Ng2File, updateData: any) {
    if (updateData['id']) {
      file.setLoadingProgress(100);
      file.setHash(updateData['id']);
    } else {
      throw new Error(`updateData['id'] is undefined. Check your input.`)
    }
  }
}