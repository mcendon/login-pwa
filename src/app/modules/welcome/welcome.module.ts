import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { CounterComponent } from './counter/counter.component';
import { LogoutComponent } from './logout/logout.component';
import { CounterItemComponent } from './counter-item/counter-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    WelcomeComponent,
    CounterComponent,
    LogoutComponent,
    CounterItemComponent,
  ],
  imports: [CommonModule, WelcomeRoutingModule, SharedModule],
})
export class WelcomeModule {}
