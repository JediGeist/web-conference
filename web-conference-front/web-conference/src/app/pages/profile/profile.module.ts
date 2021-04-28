import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileService } from './profile.service';
import { AppModule } from 'src/app/app.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  providers: [
    ProfileService
  ]
})
export class ProfileModule { }
