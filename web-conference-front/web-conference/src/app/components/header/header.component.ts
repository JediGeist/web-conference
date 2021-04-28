import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PopupComponent, Align, Margin } from '@progress/kendo-angular-popup';

import { AppService } from 'src/app/app.service';
import { RoutingService } from 'src/app/services/routing.service';
import { IUserDropdownItem } from 'src/app/interfaces/header/IUserDropdownItem';
import { INavigationItem, NavigationTypeEnum } from 'src/app/interfaces/header/INavigationItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  public anchorAlign: Align = { horizontal: 'right', vertical: 'bottom' };
  public popupAlign: Align = { horizontal: 'right', vertical: 'top' };
  public margin: Margin = { horizontal: -20, vertical: 0 };

  public showUserDropdown: boolean = false;
  @ViewChild('user_dropdown') userDropdownRef: PopupComponent;

  public userDropdownItems: Array<IUserDropdownItem> = [
    {
      text: 'Авторизация',
      isDisabled: () => false,
      isVisible: () => !this.appService.user,
      onClick: () => this.routingService.navigateLogin()
    },
    {
      text: 'Регистрация',
      isDisabled: () => false,
      isVisible: () => !this.appService.user,
      onClick: () => this.routingService.navigateRegistry()
    },
    {
      text: 'Присоединиться',
      isDisabled: () => false,
      isVisible: () => true,
      onClick: () => this.routingService.navigateJoin()
    },
    {
      text: 'Создать',
      isDisabled: () => false,
      isVisible: () => !!this.appService.user,
      onClick: () => this.routingService.navigateCreateRoom()
    },
    {
      text: 'Личный кабинет',
      isDisabled: () => false,
      isVisible: () => !!this.appService.user,
      onClick: () => this.routingService.navigateProfile()
    },
    {
      text: 'Выйти',
      isDisabled: () => false,
      isVisible: () => !!this.appService.user,
      onClick: () => this.logOut()
    }
  ];

  public navigationItems: Array<INavigationItem> = [
  ];

  @Input() selectedNavItem: NavigationTypeEnum;

  constructor(public appService: AppService,
              public routingService: RoutingService,
              private router: Router) { }

  public ngOnInit(): void {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          this.resetHeader();
        }
      }
    );
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if ('selectedNavItem' in changes) {
      this.updateNavigationItemSelect(changes['selectedNavItem'].currentValue);
    }
  }

  private resetHeader(): void {
    this.showUserDropdown = false;
  }

  public toggleUserDropdown(): void {
    const prev = this.showUserDropdown;
    setTimeout(() => {
      this.showUserDropdown = !prev;
    }, 100);
  }

  @HostListener('document:click', ['$event'])
  public clickoutHandler(event): void {
    if (this.showUserDropdown) {
      this.userDropdownClickOutHandler(event);
    }
  }

  private userDropdownClickOutHandler(event): void {
    if (!this.userDropdownRef || !this.userDropdownRef.container.nativeElement) {
      return;
    }
    if (!this.userDropdownRef.container.nativeElement.contains(event.target)) {
      this.showUserDropdown = false;
    }
  }

  private updateNavigationItemSelect(type: NavigationTypeEnum): void {
    this.navigationItems.forEach(i => {
      i.isSelected = i.type === type;
    });
  }

  public logOut(): void {
    // стоит разобраться, как нормально сделать выход
    this.resetHeader();
    this.appService.user = null;
    this.routingService.navigateHome();
  }
}
