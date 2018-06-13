import {INg2DefaultFileUploaderConfigData} from '../default/INg2DefaultFileUploaderConfigData';

export interface INg2AsyncFileUploaderConfigData extends INg2DefaultFileUploaderConfigData {
  uploadUrl: string,
  deleteUrl: string,
  // max files count is REQUIRED for Async uploader
  maxFilesCount: number;
}
