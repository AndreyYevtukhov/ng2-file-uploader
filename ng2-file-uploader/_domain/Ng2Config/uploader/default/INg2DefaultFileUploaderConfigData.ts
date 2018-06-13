import {INg2FileInputConfigData} from '../../file-input/INg2FileInputConfigData';
import {IFileRequirements} from '../../../Ng2File/IFileRequirements';

export interface INg2DefaultFileUploaderConfigData {
  labelHtml?: string,
  isLabelShown?: boolean,
  maxFilesCount?: number,
  fileRequirements?: IFileRequirements,
  fileInputConfigData?: INg2FileInputConfigData
}
