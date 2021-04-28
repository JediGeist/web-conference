import { Component, OnInit, Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AppService } from 'src/app/app.service';
import { CreateRoomRequest } from 'src/app/dtos/requests/createRoom/createRoomRequest';
import { UserRoomDto, UserRoomFindRequest } from 'src/app/dtos/userRoom.dto';
import { NotifyService } from 'src/app/services/notify.service';

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
              private notifyService: NotifyService,
              @Inject('ROOM_URL') protected roomUrl: string) { }

  public ngOnInit(): void {
    setTimeout(() => {
      this.appService.selectedNavItem = null;
    }, 0);

    this.loadUserRooms();
  }

  loadUserRooms(): void {

    const data: UserRoomFindRequest = {
      user_id: this.appService.user.user_id
    };
        
    this.profileService.loadUserRooms(data).subscribe(
      result => {
        console.log(result);
        this.userRooms = result;
      },
      error => {
        this.notifyService.showError(error.message);
        this.createRoomForm.reset();
      }
    );
  }

  public createNewRoom(): void {

    const data: CreateRoomRequest = {
      name: this.createRoomForm.get('name').value,
      owner_id: this.appService.user.user_id
    };
        
    this.profileService.createRoom(data).subscribe(
      result => {
        this.loadUserRooms();
      },
      error => {
        this.notifyService.showError(error.message);
        this.createRoomForm.reset();
      }
    );
  }

  public joinRoom(room_id: string): void {
    window.open('https://web-conference-hse-room.herokuapp.com/' + room_id,'_blank');
  }
}
