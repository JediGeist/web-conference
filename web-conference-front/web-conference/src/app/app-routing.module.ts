import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'registry', loadChildren: () => import('./pages/registry/registry.module').then(m => m.RegistryModule) },
  { path: 'join', loadChildren: () => import('./pages/join/join.module').then(m => m.JoinModule) },
  { path: 'create-room', loadChildren: () => import('./pages/create-room/create-room.module').then(m => m.CreateRoomModule) },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'rooms', loadChildren: () => import('./pages/rooms/rooms.module').then(m => m.RoomModule) },
  { path: 'room-info/:room_id', loadChildren: () => import('./pages/room-info/room-info.module').then(m => m.RoomInfoModule) },
  { path: 'create-user-room', loadChildren: () => import('./pages/create-user-room/create-user-room.module').then(m => m.CreateUserRoomModule) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
