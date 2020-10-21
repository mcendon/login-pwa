import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZerofillPipe } from './pipes/zerofill.pipe';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { InputComponent } from '../../components/input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ZerofillPipe, ButtonComponent, InputComponent],
  imports: [CommonModule, FormsModule],
  providers: [ZerofillPipe],
  exports: [ZerofillPipe, ButtonComponent, InputComponent],
})
export class SharedModule {}
