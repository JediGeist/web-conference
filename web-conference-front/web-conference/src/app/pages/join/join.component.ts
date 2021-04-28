import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { JoinRequest } from 'src/app/dtos/requests/join/joinRequest';
import { NotifyService } from 'src/app/services/notify.service';
import { RoutingService } from 'src/app/services/routing.service';
import { JoinService } from './join.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  public joinForm: FormGroup = new FormGroup({
    room_id: new FormControl()
  });

  constructor(public routingService: RoutingService,
              private appService: AppService,
              private joinService: JoinService,
              private notifyService: NotifyService) { }

  public ngOnInit(): void {
    setTimeout(() => {
      this.appService.selectedNavItem = null;
    }, 0);
  }

  public joinRoom(): void {

    const roomId = this.joinForm.get('room_id').value;

    const data: JoinRequest = {
      room_id: roomId
    };

    this.joinService.checkRoom(data).subscribe(
      result => {
        if (!result.room_id) {
          this.notifyService.showError('Неизвестный идентификатор комнаты!');
        } else {
          console.log(1);
          window.open('https://web-conference-hse-room.herokuapp.com/' + result.room_id,'_blank');
        }
      },
      error => {
        this.notifyService.showError(error.message);
        this.joinForm.reset();
      }
    );
  }
}
