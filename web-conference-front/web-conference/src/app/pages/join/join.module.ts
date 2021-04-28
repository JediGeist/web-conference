import { NgModule } from '@angular/core';

import { JoinRoutingModule } from './join-routing.module';
import { JoinComponent } from './join.component';
import { JoinService } from './join.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [JoinComponent],
  imports: [
    SharedModule,
    JoinRoutingModule
  ],
  providers: [
    JoinService
  ]
})
export class JoinModule { }
