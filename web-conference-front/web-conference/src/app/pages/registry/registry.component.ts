import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { RegistryRequest } from 'src/app/dtos/requests/registry/registryRequest';
import { NotifyService } from 'src/app/services/notify.service';
import { RoutingService } from 'src/app/services/routing.service';
import { RegistryService } from './registry.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {

  public registryForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    login: new FormControl(),
    password: new FormControl()
  });

  constructor(public routingService: RoutingService,
              private appService: AppService,
              private registryService: RegistryService,
              private notifyService: NotifyService) { }

  public ngOnInit(): void {
    setTimeout(() => {
      this.appService.selectedNavItem = null;
    }, 0);
  }

  public submitForm(): void {
    const data: RegistryRequest = {
      name: this.registryForm.get('name').value,
      email: this.registryForm.get('email').value,
      login: this.registryForm.get('login').value,
      password: this.registryForm.get('password').value
    };
        
    this.registryService.register(data).subscribe(
      result => {
        this.routingService.navigateLogin();
      },
      error => {
        this.notifyService.showError(error.message);
        this.registryForm.reset();
      }
    );
  }
}
