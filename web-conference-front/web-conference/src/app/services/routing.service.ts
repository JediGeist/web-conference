import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationTypeEnum } from '../interfaces/header/INavigationItem';

@Injectable()
export class RoutingService {

  constructor(private router: Router) {
  }

  public navigateEmpty(): void {
    this.router.navigate([]);
  }

  public navigate(url: string, navItem: NavigationTypeEnum = null): void {
    this.router.navigate([url]);
  }

  public navigateWithParameter(url: string, parameters: Array<string>, navItem: NavigationTypeEnum = null): void {
    this.router.navigate([url, ...parameters]);
  }

  public navigateHome(): void {
    this.navigate('home');
  }

  public navigateLogin(): void {
    this.navigate('login');
  }

  public navigateRegistry(): void {
    this.navigate('registry');
  }

  public navigateProfile(): void {
    this.navigate('profile');
  }

  public navigateJoin(): void {
    this.navigate('join');
  }

  public navigateCreateRoom(): void {
    this.navigate('create-room');
  }
}
