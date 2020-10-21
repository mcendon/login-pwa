import { ZerofillPipe } from './zerofill.pipe';

describe('ZerofillPipe', () => {
  it('create an instance', () => {
    const pipe = new ZerofillPipe();
    expect(pipe).toBeTruthy();
  });

  it('format single digit numbers', () => {
    const pipe = new ZerofillPipe();
    expect(pipe.transform(0, 2)).toEqual('00');
    expect(pipe.transform(1, 2)).toEqual('01');
  });

  it('format multiple digit number', () => {
    const pipe = new ZerofillPipe();
    expect(pipe.transform(11, 2)).toEqual('11');
    expect(pipe.transform(114, 2)).toEqual('114');
    expect(pipe.transform(11, 3)).toEqual('011');
  });
});
