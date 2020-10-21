import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZerofillPipe } from './pipes/zerofill.pipe';

@NgModule({
  declarations: [ZerofillPipe],
  imports: [CommonModule],
  providers: [ZerofillPipe],
  exports: [ZerofillPipe],
})
export class SharedModule {}
