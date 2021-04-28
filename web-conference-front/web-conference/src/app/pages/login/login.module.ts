import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
