import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  /**
   * formats given size in bytes to more readable string
   *
   * possible outputs:
   * 1,02 GB
   * 12 MB
   * 145,10 KB
   * 40 bytes
   * 1 byte
   *
   * @param {number} bytes
   * @return {string}
   */
  transform(bytes: number): string {
    let formattedSize = '';

    if (bytes >= 1000000000) {
      formattedSize = (bytes / 1000000000).toFixed(2) + ' GB';
    } else if (bytes >= 1000000) {
      formattedSize = (bytes / 1000000).toFixed(2) + ' MB';
    } else if (bytes >= 1000) {
      formattedSize = (bytes / 1000).toFixed(2) + ' KB';
    } else if (bytes > 1) {
      formattedSize = bytes + ' bytes';
    } else if (bytes === 1) {
      formattedSize = bytes + ' byte';
    } else {
      formattedSize = '0 byte';
    }

    return formattedSize;
  }

}
