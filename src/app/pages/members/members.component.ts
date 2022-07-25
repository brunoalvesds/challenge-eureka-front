import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersPage implements OnInit {
  membersList = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsersList().subscribe(
      (response: any) => {
        this.membersList = response;
        this.sortMembersByPoints(this.membersList);
      },
      error => {
        console.log("error: ", error);
      }
    );
  }

  sortMembersByPoints(array: any) {
    array = this.membersList.sort(function(a, b) {
      return b['balance']['points'] - a['balance']['points'];
    });
  }

}
