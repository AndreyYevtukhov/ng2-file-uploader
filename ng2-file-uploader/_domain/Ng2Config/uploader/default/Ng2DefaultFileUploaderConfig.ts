import {Ng2FileInputConfig} from '../../file-input/Ng2FileInputConfig';
import {IFileRequirements} from '../../../Ng2File/IFileRequirements';
import {INg2FileFactory} from "../../../Ng2FileFactory/INg2FileFactory";

export class Ng2DefaultFileUploaderConfig {
  public labelHtml: string;
  public isLabelShown: boolean;
  public maxFilesCount: number;
  public fileFactory: INg2FileFactory;
  public fileRequirements: IFileRequirements;
  public fileInputConfig: Ng2FileInputConfig;
}
