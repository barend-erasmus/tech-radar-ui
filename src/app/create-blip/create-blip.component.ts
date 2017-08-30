// Imports
import { Headers, Http, Response } from '@angular/http';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

// Imports services
import { BlipService } from './../services/blip.service';
import { AuthService } from './../services/auth.service';

import { environment } from './../../environments/environment';

@Component({
  selector: 'app-create-blip',
  templateUrl: './create-blip.component.html',
  styleUrls: ['./create-blip.component.css']
})
export class CreateBlipComponent implements OnInit {

  private authService: AuthService = null;
  private blipService: BlipService = null;

  public user: any = null;

  public name: string = null;
  public description: string = null;
  public quadrant: string = null;
  public offset: number = null;

  @Output()
  public onCreate = new EventEmitter();

  constructor(http: Http) {
    this.authService = new AuthService(http);
    this.blipService = new BlipService(http);
  }

  ngOnInit() {
    this.loadUser();
  }

  public onClick_Create(): void {
    this.blipService.create(this.name, this.description, this.user.username, this.quadrant, this.offset).subscribe((x) => {
      this.name = null;
      this.description = null;
      this.quadrant = null;
      this.offset = null;
      this.onCreate.emit();
    });
  }

  private loadUser(): void {
    this.authService.user().subscribe((result: any) => {
      this.user = result;
    });
  }

}
