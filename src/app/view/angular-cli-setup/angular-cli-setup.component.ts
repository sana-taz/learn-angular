import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-cli-setup',
  templateUrl: './angular-cli-setup.component.html',
  styleUrls: ['./angular-cli-setup.component.css'],
})
export class AngularCliSetupComponent implements OnInit {
  constructor() {}

  animation = 'pulse';
  contentLoaded = false;
  count = 2;
  widthHeightSizeInPixels = 50;
  intervalId: number | null = null;
  ngOnInit() {
    setTimeout(() => {
      this.contentLoaded = true;
    }, 2000);

    this.intervalId = window.setInterval(() => {
      this.animation = this.animation === 'pulse' ? 'progress-dark' : 'pulse';
      this.count = this.count === 2 ? 5 : 2;
      this.widthHeightSizeInPixels =
        this.widthHeightSizeInPixels === 50 ? 100 : 50;
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
