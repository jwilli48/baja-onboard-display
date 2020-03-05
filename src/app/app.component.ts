import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'baja-onboard-display';
  displayLabel: (value: number) => string;
  gaugeValues: any = {
    1: 100,
    2: 50,
    3: 50,
    4: 50,
    5: 50,
    6: 50,
    7: 50
  };
  interval: any;
  time = new Observable((observer) => {
    <any>setInterval(() => observer.next(this.runningTime++), 1000);
    return { unsubscribe() { this.runningTime = 0; } }
  });
  runningTime: number = 0;
  x: number;
  y: number;
  z: number;
  data: string;

  runner: Subscription;

  constructor(private dataService: DataService) {
    this.displayLabel = function (value: number): string {
      return `${value}x1000`;
    };
    this.runner = interval(500).subscribe((time) => {
      this.getData();
    })
  }

  ngOnInit(): void {
    const updateValues = (): void => {
      this.gaugeValues = {
        1: Math.round(Math.random() * 100),
        2: Math.round(Math.random() * 100),
        3: Math.round(Math.random() * 100),
        4: Math.round(Math.random() * 100),
        5: Math.round(Math.random() * 200),
        6: Math.round(Math.random() * 100),
        7: Math.round(Math.random() * 100)
      };
    };

    const INTERVAL: number = 5000;

    this.interval = setInterval(updateValues, INTERVAL);
    updateValues();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  getData(): void {
    this.dataService.getData().subscribe((resp) => {
      this.data = resp.body;
      let data_str = this.data.split(' ');
      this.x = +data_str[0];
      this.y = +data_str[1];
      this.z = +data_str[2];
    });
  }
}
