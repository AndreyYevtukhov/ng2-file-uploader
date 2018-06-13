import {Ng2DefaultFileUploaderConfig} from '../default/Ng2DefaultFileUploaderConfig';

export class Ng2AsyncFileUploaderConfig extends Ng2DefaultFileUploaderConfig {
  uploadUrl: string;
  deleteUrl: string;

  constructor () {
    super();
  }
}
