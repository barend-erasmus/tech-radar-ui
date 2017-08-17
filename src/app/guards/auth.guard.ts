// Imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { CanActivate, Router } from '@angular/router';

import { environment } from './../../environments/environment';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private http: Http, private router: Router) { }

  canActivate() {
    return new Observable<boolean>(observer => {
      const accessToken = localStorage.getItem('jwt.token');

      if (accessToken) {
        const headers = new Headers();
        headers.append('authorization', `Bearer ${accessToken}`);

        this.http.get(`http://cpt.innovation.euromonitor.local/auth/user`, {
          headers
        })
          .map((x) => x.json()).subscribe((json) => {
            if (json) {
              observer.next(true);
              observer.complete();
            } else {
              window.location.href = `http://cpt.innovation.euromonitor.local/auth/authorize?response_type=token&client_id=2KDgqcZ0bD&redirect_uri=${environment.domain}/callback&scope=admin&state=123456`;
              observer.next(false);
              observer.complete();
            }
          });

      } else {
        window.location.href = `http://cpt.innovation.euromonitor.local/auth/authorize?response_type=token&client_id=2KDgqcZ0bD&redirect_uri=${environment.domain}/callback&scope=admin&state=123456`;
        observer.next(false);
        observer.complete();
      }
    });
  }
}
