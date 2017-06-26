// Imports
import { Headers, Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';

// Imports services
import { BlipService } from './../services/blip.service';

// Imports models
import { Blip } from './../models/blip';
import { Data } from './../models/data';
import { Item } from './../models/item';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {

  private blipService: BlipService = null;

  private blips: Blip[] = null;
  public data: Data = null;

  constructor(http: Http) {
    this.blipService = new BlipService(http);
  }

  ngOnInit() {
    this.loadBlips();
  }

  public onHover(event: any): void {
    console.log(event);
  }

  public onMouseLeave(event: any): void {
    console.log(event);
  }

  public onClick(event: any): void {
    console.log(event);
  }

  private loadBlips(): void {
    this.blipService.list().subscribe((results: Blip[]) => {
      this.blips = results;
      this.blipsToData();
    });
  }

  private blipsToData(): void {
    this.data = {
      quadrants: ["Techniques", "Tools", "Platforms", "Languages and Frameworks"],
      items: this.blips.map((x) => new Item(x.id, x.name, x.quadrant, x.value, x.angle))
    };
  }

}
