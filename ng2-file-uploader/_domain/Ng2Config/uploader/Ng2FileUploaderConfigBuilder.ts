import {Ng2DefaultFileUploaderConfig} from './default/Ng2DefaultFileUploaderConfig';
import {INg2DefaultFileUploaderConfigData} from './default/INg2DefaultFileUploaderConfigData';
import {Ng2FileInputConfigBuilder} from '../file-input/Ng2FileInputConfigBuilder';
import {Ng2AsyncFileUploaderConfig} from './async/Ng2AsyncFileUploaderConfig';
import {INg2AsyncFileUploaderConfigData} from './async/INg2AsyncFileUploaderConfigData';

export class Ng2FileUploaderConfigBuilder {
  public static buildDefaultConfig(data?: INg2DefaultFileUploaderConfigData): Ng2DefaultFileUploaderConfig {
    let config = new Ng2DefaultFileUploaderConfig();

    this.buildBasePart(config, data);

    config.maxFilesCount = (data && data.maxFilesCount)
      ? data.maxFilesCount
      : 3;

    return config;
  }

  public static buildAsyncConfig(data: INg2AsyncFileUploaderConfigData): Ng2AsyncFileUploaderConfig {
    let config = new Ng2AsyncFileUploaderConfig();

    this.buildBasePart(config, data);

    config.uploadUrl = data.uploadUrl;
    config.deleteUrl = data.deleteUrl;
    config.maxFilesCount = data.maxFilesCount;

    return config;
  }

  private static buildBasePart(config, data: INg2DefaultFileUploaderConfigData) {
    config.labelHtml = (data && data.labelHtml)
      ? data.labelHtml
      : `Upload file`;

    config.isLabelShown = (data)
      ? !!data.isLabelShown
      : false;

    config.fileInputConfig = (data && data.fileInputConfigData)
      ? Ng2FileInputConfigBuilder.build(data.fileInputConfigData)
      : Ng2FileInputConfigBuilder.build();

    config.fileRequirements = (data && data.fileRequirements)
      ? data.fileRequirements
      : {};

    config.fileFactory = (data && data.fileFactory)
      ? data.fileFactory
      : null;
  }
}
