import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zerofill',
})
export class ZerofillPipe implements PipeTransform {
  transform(n: number, width: number): unknown {
    width -= n.toString().length;
    if (width > 0) {
      return (
        new Array(width + (/\./.test(n.toString()) ? 2 : 1)).join('0') +
        n
      );
    }
    return n + '';
  }
}
