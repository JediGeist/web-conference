import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { RoomInfoRoutingModule } from './room-info-routing.module';
import { RoomInfoComponent } from './room-info.component';
import { RoomInfoService } from './room-info.service';
import { AppModule } from 'src/app/app.module';

@NgModule({
  declarations: [RoomInfoComponent],
  imports: [
    SharedModule,
    RoomInfoRoutingModule
  ],
  providers: [
    RoomInfoService
  ]
})
export class RoomInfoModule { }
