import {Ng2FileInputConfig} from '../../file-input/Ng2FileInputConfig';
import {IFileRequirements} from '../../../Ng2File/IFileRequirements';

export class Ng2DefaultFileUploaderConfig {
  public labelHtml: string;
  public isLabelShown: boolean;
  public maxFilesCount: number;
  public fileRequirements: IFileRequirements;
  public fileInputConfig: Ng2FileInputConfig;

  constructor () {
  }
}
