export class Ng2FileInputConfig {
  public inputId: string;
  public isMultiple: boolean;
  public labelHtml: string;

  constructor () {
    this.inputId = Math.random().toString(36).substring(7);
  }
}
