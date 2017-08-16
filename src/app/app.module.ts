// Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Imports components
import { AppComponent } from './app.component';
import { TechRadarChartComponent } from './tech-radar-chart/tech-radar-chart.component';
import { RadarComponent } from './radar/radar.component';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';

// Imports gaurds
import { AuthGuard } from './guards/auth.guard';

const router = RouterModule.forRoot([
  {
    component: HomeComponent,
    path: '',
    canActivate: [
      AuthGuard
    ],
  },
  {
    component: CallbackComponent,
    path: 'callback'
  },
]);

@NgModule({
  declarations: [
    AppComponent,
    TechRadarChartComponent,
    RadarComponent,
    HomeComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    router
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
