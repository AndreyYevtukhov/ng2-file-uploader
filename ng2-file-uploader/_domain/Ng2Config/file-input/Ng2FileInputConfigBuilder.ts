import {INg2FileInputConfigData} from './INg2FileInputConfigData';
import {Ng2FileInputConfig} from './Ng2FileInputConfig';

export class Ng2FileInputConfigBuilder {
  public static build(data?: INg2FileInputConfigData): Ng2FileInputConfig {
    let config = new Ng2FileInputConfig();

    config.isMultiple = (data)
      ? !!data.isMultiple
      : false;

    config.labelHtml = (data && data.labelHtml)
      ? data.labelHtml
      : `<span class="label-text mr-2">Drag & drop files here or</span><span class="btn btn-default label-btn">Browse</span>`;

    return config;
  }
}
