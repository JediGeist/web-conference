import { NgModule } from '@angular/core';

import { RegistryRoutingModule } from './registry-routing.module';
import { RegistryComponent } from './registry.component';
import { RegistryService } from './registry.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RegistryComponent],
  imports: [
    SharedModule,
    RegistryRoutingModule
  ],
  providers: [
    RegistryService
  ]
})
export class RegistryModule { }
