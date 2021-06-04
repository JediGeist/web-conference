import { Component, OnInit, Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AppService } from 'src/app/app.service';
import { UserRoomDto } from 'src/app/dtos/userRoom.dto';

import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public createRoomForm: FormGroup = new FormGroup({
    name: new FormControl()
  });

  userRooms: UserRoomDto[] = [];

  constructor(public appService: AppService,
              public profileService: ProfileService,
              @Inject('ROOM_URL') protected roomUrl: string) { }

  public ngOnInit(): void {
    setTimeout(() => {
      this.appService.selectedNavItem = null;
    }, 0);
  }
}
