import { NgModule } from '@angular/core';

import { CreateRoomRoutingModule } from './create-room-routing.module';
import { CreateRoomComponent } from './create-room.component';
import { CreateRoomService } from './create-room.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CreateRoomComponent],
  imports: [
    SharedModule,
    CreateRoomRoutingModule
  ],
  providers: [
    CreateRoomService
  ]
})
export class CreateRoomModule { }
