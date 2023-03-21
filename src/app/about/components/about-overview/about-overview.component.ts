import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-overview',
  templateUrl: './about-overview.component.html',
  styleUrls: ['./about-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
