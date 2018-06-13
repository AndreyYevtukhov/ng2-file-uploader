export class Ng2FileInputConfig {
  public inputId: number;
  public isMultiple: boolean;
  public labelHtml: string;

  constructor () {
    this.inputId = Date.now();
  }
}
