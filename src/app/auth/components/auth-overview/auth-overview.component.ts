import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth-overview',
  templateUrl: './auth-overview.component.html',
  styleUrls: ['./auth-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
