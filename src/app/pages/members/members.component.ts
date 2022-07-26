import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProgramsService } from 'src/app/services/programs/programs.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersPage implements OnInit {
  membersList = [];
  hasUserSelected: boolean = false;
  selectedUserData: Array<any> = [];
  userProgramData: Array<any> = [];

  constructor(private usersService: UsersService, private programsService: ProgramsService) { }

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

  onUserSelected(event: any) {
    this.hasUserSelected = true;
    console.log("event ", event);
    this.usersService.getUserById(event.userId).subscribe(
      (response: any) => {
        console.log("res: ", response);
        this.selectedUserData = response;

        this.programsService.getUserProgram(response.programId).subscribe(
          (response: any) => {
            this.userProgramData = response;
          }
        );
      }
    );


  }

}
