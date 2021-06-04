import { Component, OnInit, Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AppService } from 'src/app/app.service';
import { CreateRoomRequest } from 'src/app/dtos/requests/createRoom/createRoomRequest';
import { UserRoomDto, UserRoomFindRequest } from 'src/app/dtos/userRoom.dto';
import { NotifyService } from 'src/app/services/notify.service';
import { RoutingService } from 'src/app/services/routing.service';

import { RoomService } from './rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomComponent implements OnInit {

  public createRoomForm: FormGroup = new FormGroup({
    name: new FormControl()
  });

  userRooms: UserRoomDto[] = [];

  constructor(public appService: AppService,
              public routingService: RoutingService,
              public roomsService: RoomService,
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
        
    this.roomsService.loadUserRooms(data).subscribe(
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
    this.routingService.navigateCreateUserRoom();
  }

  public joinRoom(room_id: string): void {
    window.open('https://web-conference-hse-room.herokuapp.com/' + room_id,'_blank');
  }

  public getRoomInfo(room_id: string): void {
    this.routingService.navigateRoomInfo(room_id);
  }
}
