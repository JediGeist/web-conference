import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserRoomComponent } from './create-user-room.component';

const routes: Routes = [{ path: '', component: CreateUserRoomComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateUserRoomRoutingModule { }
