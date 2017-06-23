// Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


// Imports components
import { AppComponent } from './app.component';
import { TechRadarChartComponent } from './tech-radar-chart/tech-radar-chart.component';
import { RadarComponent } from './radar/radar.component'

@NgModule({
  declarations: [
    AppComponent,
    TechRadarChartComponent,
    RadarComponent    
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
