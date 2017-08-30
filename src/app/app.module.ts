// Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Imports components
import { AppComponent } from './app.component';
import { TechRadarChartComponent } from './tech-radar-chart/tech-radar-chart.component';
import { RadarComponent } from './radar/radar.component';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';

// Imports gaurds
import { AuthGuard } from './guards/auth.guard';
import { CreateBlipComponent } from './create-blip/create-blip.component';

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
    CallbackComponent,
    CreateBlipComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    router
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
