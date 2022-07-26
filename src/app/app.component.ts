import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'challenge-eureka-front';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    //First, the authentication service is called and token is set
    this.authService.authentication().subscribe(
      (response: any) => {
        if(response.auth === true) {
          sessionStorage.setItem("TOKEN", response.token);
        } else {
          console.log("Not authorized.");
        }
      },
      error => {
        console.error("Authentication error: ", error);
      }
    );
  }
}
