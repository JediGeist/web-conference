import { Component, OnInit, Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AppService } from 'src/app/app.service';
import { CreateUserRoomRequest } from 'src/app/dtos/requests/createRoom/createUserRoomRequest';
import { RoomDto, RoomIdRequest } from 'src/app/dtos/room.dto';
import { NotifyService } from 'src/app/services/notify.service';
import { RoutingService } from 'src/app/services/routing.service';

import { RoomInfoService } from './room-info.service';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.scss']
})
export class RoomInfoComponent implements OnInit {

  public createRoomForm: FormGroup = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    schedule: new FormControl(),
    password: new FormControl()
  });

  public editRoom: boolean = false;

  public room_id: string;

  public room: RoomDto;

  public isRoomLoaded: boolean = false;

  constructor(public appService: AppService,
              public routingService: RoutingService,
              public roomInfoService: RoomInfoService,
              private notifyService: NotifyService,
              private route: ActivatedRoute,
              @Inject('ROOM_URL') protected roomUrl: string) { 

                this.room_id = this.route.snapshot.paramMap.get('room_id');

                this.loadRoomInfo();
              }

  public async ngOnInit(): Promise<void> {
    setTimeout(() => {
      this.appService.selectedNavItem = null;
    }, 0);
  }

  public async loadRoomInfo(): Promise<void> {
    const data: RoomIdRequest = {
      room_id: this.room_id
    };
        
    await this.roomInfoService.loadRoomInfo(data).subscribe(
      result => {
        this.room = result;
        console.log(this.room);
        this.isRoomLoaded = true;
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

  public editRoomEnable(): void {
    this.editRoom = true;
  }

  public changeEditRoom(): void {
    this.editRoom = !this.editRoom;
  }

  public removeRoom(): void {
    
  }

  createRoom(): void {
    
    const data: CreateUserRoomRequest = {
      name: this.createRoomForm.get('name').value,
      owner_id: this.appService.user.user_id,
      info: this.createRoomForm.get('description').value,
      schedule: this.createRoomForm.get('schedule').value,
      password: this.createRoomForm.get('password').value
    };
        
    this.roomInfoService.updateRoom(data).subscribe(
      result => {
        this.loadRoomInfo();
        this.editRoom = false;
      },
      error => {
        this.notifyService.showError(error.message);
        this.createRoomForm.reset();
      }
    );
  }
}
