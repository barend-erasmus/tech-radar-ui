// Imports
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

// Imports services
import { BaseService } from './base.service';

// Imports models
import { Blip } from './../models/blip';

@Injectable()
export class AuthService extends BaseService {
  
  constructor(http: Http) { 
    super(http);
  }

  public user(): Observable<any> {
    return this.getExternal('http://cpt.innovation.euromonitor.local/auth/user').map((x) => x.json());
  }
}