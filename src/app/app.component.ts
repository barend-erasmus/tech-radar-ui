// Imports
import { Headers, Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';

// Imports services
import { BlipService } from './services/blip.service';
import { AuthService } from './services/auth.service';

import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private authService: AuthService = null;

  public user: any = null;

  constructor(http: Http) {
    this.authService = new AuthService(http);
  }

  ngOnInit() {
    this.loadUser();
  }

  public logout(): void {
    localStorage.setItem('jwt.token', null);
    window.location.href = `http://cpt.innovation.euromonitor.local/auth/authorize?response_type=token&client_id=2KDgqcZ0bD&redirect_uri=${environment.domain}/callback&scope=admin&state=123456`;
  }

  private loadUser(): void {
    this.authService.user().subscribe((result: any) => {
      if (result) {
        this.user = result;
      } else {
        setTimeout(() => {
          this.loadUser();
        }, 500)
      }
    });
  }
}
