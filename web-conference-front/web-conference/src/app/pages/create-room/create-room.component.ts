import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { NotifyService } from 'src/app/services/notify.service';
import { RoutingService } from 'src/app/services/routing.service';
import { CreateRoomService } from './create-room.service';
import { CreateRoomRequest } from 'src/app/dtos/requests/createRoom/createRoomRequest';

import uuidv4 from 'uuid/dist/v4';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {

  public createRoomForm: FormGroup = new FormGroup({
    name: new FormControl()
  });

  constructor(private router: Router,
            private createRoomService: CreateRoomService,
            public appService: AppService,
            private notifyService: NotifyService) { }

  public ngOnInit(): void {  }

  public createRoom() {
    console.log(this.appService.user);

    const roomName = this.createRoomForm.get('name').value;

    const data: CreateRoomRequest = {
      name: roomName,
      owner_id: this.appService.user.user_id
    };
        
    console.log(data);

    this.createRoomService.createRoom(data).subscribe(
      result => {
        console.log(1);
        window.open('https://web-conference-hse-room.herokuapp.com/' + result.room_id,'_blank');
      },
      error => {
        this.notifyService.showError(error.message);
        this.createRoomForm.reset();
      }
    );
  }
}
