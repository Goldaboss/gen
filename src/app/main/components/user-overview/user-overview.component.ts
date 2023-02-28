import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
