import {INg2FileInputConfigData} from '../../file-input/INg2FileInputConfigData';
import {IFileRequirements} from '../../../Ng2File/IFileRequirements';
import {INg2FileFactory} from "../../../Ng2FileFactory/INg2FileFactory";

export interface INg2DefaultFileUploaderConfigData {
  labelHtml?: string,
  isLabelShown?: boolean,
  maxFilesCount?: number,
  fileFactory?: INg2FileFactory,
  fileRequirements?: IFileRequirements,
  fileInputConfigData?: INg2FileInputConfigData
}
