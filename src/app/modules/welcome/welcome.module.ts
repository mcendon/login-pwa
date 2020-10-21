import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { CounterComponent } from '../../components/counter/counter.component';
import { CounterItemComponent } from '../../components/counter-item/counter-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WelcomeComponent, CounterComponent, CounterItemComponent],
  imports: [CommonModule, WelcomeRoutingModule, SharedModule],
})
export class WelcomeModule {}
