import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { UserIdDto } from "src/app/dtos/user.dto";
import { LoginRequest } from 'src/app/dtos/requests/login/loginRequest';
import { NotifyService } from 'src/app/services/notify.service';
import { RoutingService } from 'src/app/services/routing.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    login: new FormControl(),
    password: new FormControl()
  });

  constructor(public routingService: RoutingService,
              private appService: AppService,
              private loginService: LoginService,
              private notifyService: NotifyService) { }

  public ngOnInit(): void {
    setTimeout(() => {
      this.appService.selectedNavItem = null;
    }, 0);
  }

  public submitForm(): void {
    const data: LoginRequest = {
      login: this.loginForm.get('login').value,
      password: this.loginForm.get('password').value
    };
        
    this.loginService.login(data).subscribe(
      result => {
        if (!result.user_id) {
          this.loginForm.reset();
          this.notifyService.showError("логин или пароль неверны!");
        } else {
          this.initUserData(result);
        }
      },
      error => {
        this.notifyService.showError(error.message);
        this.loginForm.reset();
      }
    );
  }

  private initUserData(data: UserIdDto): void {
    this.appService.getUserById(data).subscribe(
      result => {
        this.appService.user = result;
        this.routingService.navigateHome();
      },
      error => {
        this.notifyService.showError(error.message);
        this.loginForm.reset();
      }
    );
  }
}
