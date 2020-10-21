import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zerofill',
})
export class ZerofillPipe implements PipeTransform {
  transform(number: number, width: number): unknown {
    width -= number.toString().length;
    if (width > 0) {
      return (
        new Array(width + (/\./.test(number.toString()) ? 2 : 1)).join('0') +
        number
      );
    }
    return number + '';
  }
}
