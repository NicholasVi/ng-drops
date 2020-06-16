import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
