// Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
})
export class CallbackComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  public ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params): void => {
      const accessToken: string = params['access_token'];
      localStorage.setItem('token', accessToken);
      this.router.navigateByUrl('/');
    });
  }
}