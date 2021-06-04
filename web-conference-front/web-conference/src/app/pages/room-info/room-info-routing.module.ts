import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomInfoComponent } from './room-info.component';

const routes: Routes = [{ path: '', component: RoomInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomInfoRoutingModule { }
