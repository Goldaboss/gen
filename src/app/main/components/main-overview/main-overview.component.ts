import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-overview',
  templateUrl: './main-overview.component.html',
  styleUrls: ['./main-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainOverviewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
