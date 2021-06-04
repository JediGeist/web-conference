import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { CreateUserRoomRoutingModule } from './create-user-room-routing.module';
import { CreateUserRoomComponent } from './create-user-room.component';
import { CreateUserRoomService } from './create-user-room.service';
import { AppModule } from 'src/app/app.module';

@NgModule({
  declarations: [CreateUserRoomComponent],
  imports: [
    SharedModule,
    CreateUserRoomRoutingModule
  ],
  providers: [
    CreateUserRoomService
  ]
})
export class CreateUserRoomModule { }
