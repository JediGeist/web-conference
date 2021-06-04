import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { RoomRoutingModule } from './rooms-routing.module';
import { RoomComponent } from './rooms.component';
import { RoomService } from './rooms.service';
import { AppModule } from 'src/app/app.module';

@NgModule({
  declarations: [RoomComponent],
  imports: [
    SharedModule,
    RoomRoutingModule
  ],
  providers: [
    RoomService
  ]
})
export class RoomModule { }
