import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BingService } from 'src/app/services/bing/bing.service';
import { ProgramsService } from 'src/app/services/programs/programs.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersPage implements OnInit {
  bingImageBackgroundPath: string = "../../../assets/background-default.jpg";
  membersList: Array<any> = [];
  hasUserSelected: boolean = false;
  selectedUserData: Array<any> = [];
  userProgramData: Array<any> = [];
  userActivityData: Array<any> = [];
  isLoading: boolean = false;

  constructor(
    private usersService: UsersService, private programsService: ProgramsService, private bingService: BingService) { }

  ngOnInit(): void {
    //Active loader
    this.isLoading = true;

    //Here, we call bing API to set a new dynamic background if response is ok
    this.bingService.getBingImage().subscribe(
      (response: any) => {
        let content = JSON.parse(response.contents);
        this.bingImageBackgroundPath = "https://bing.com/" + content.images[0].url;
      },
      error => {
        console.log("Bing API error: ", error);
      }
    );

    //And now we call service and list users
    this.usersService.getUsersList().subscribe(
      (response: any) => {
        this.isLoading = false;
        this.membersList = response;
        this.sortMembersByPoints(this.membersList);
      },
      error => {
        this.isLoading = false;
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

    //Here, we get user data by USER_ID
    this.usersService.getUserById(event.userId).subscribe(
      (response: any) => {
        this.selectedUserData = response;

        //Here, we get user program by USER_ID
        this.programsService.getUserProgram(response.programId).subscribe(
          (response: any) => {
            this.userProgramData = response;
          }
        );
      },
      error => {
        console.log("Error at /users endpoit: ", error);
      }
    );

    //After, we get user activity by USER_ID
    this.usersService.getUserActivity(event.userId).subscribe(
      (response: any) => {
        this.userActivityData = response;
      },
      error => {
        console.log("Error at /users/id/activities endpoit: ", error);
      }
    );
  }

}
