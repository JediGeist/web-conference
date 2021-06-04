import { Component, OnInit, Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AppService } from 'src/app/app.service';
import { CreateUserRoomRequest } from 'src/app/dtos/requests/createRoom/createUserRoomRequest';
import { UserRoomDto, UserRoomFindRequest } from 'src/app/dtos/userRoom.dto';
import { NotifyService } from 'src/app/services/notify.service';
import { RoutingService } from 'src/app/services/routing.service';

import { CreateUserRoomService } from './create-user-room.service';

@Component({
  selector: 'app-create-user-room',
  templateUrl: './create-user-room.component.html',
  styleUrls: ['./create-user-room.component.scss']
})
export class CreateUserRoomComponent implements OnInit {

  public createRoomForm: FormGroup = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    schedule: new FormControl(),
    password: new FormControl()
  });

  constructor(public appService: AppService,
              public routingService: RoutingService,
              public createUserRoomService: CreateUserRoomService,
              private notifyService: NotifyService,
              @Inject('ROOM_URL') protected roomUrl: string) { }

  public ngOnInit(): void {
    setTimeout(() => {
      this.appService.selectedNavItem = null;
    }, 0);
  }

  createRoom(): void {
    
    const data: CreateUserRoomRequest = {
      name: this.createRoomForm.get('name').value,
      owner_id: this.appService.user.user_id,
      info: this.createRoomForm.get('description').value,
      schedule: this.createRoomForm.get('schedule').value,
      password: this.createRoomForm.get('password').value
    };
        
    this.createUserRoomService.createRoom(data).subscribe(
      result => {
        this.routingService.navigateRooms();
      },
      error => {
        this.notifyService.showError(error.message);
        this.createRoomForm.reset();
      }
    );
  }
}
