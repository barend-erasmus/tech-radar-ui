// Imports
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

// Imports services
import { BaseService } from './base.service';

// Imports models
import { Blip } from './../models/blip';

@Injectable()
export class BlipService extends BaseService {

  constructor(http: Http) {
    super(http);
  }

  public list(): Observable<Blip[]> {
    return this.get('/api/blip/list').map((x) => x.json());
  }

  public create(name: string, description: string, creator: string, quadrant: string, offset: number): Observable<void> {
    return this.post('/api/blip', {
      name,
      description,
      creator,
      quadrant,
      offset,
    }).map((x) => x.json());
  }
}
