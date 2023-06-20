import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { Metrika } from 'ng-yandex-metrika';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'gen';

  private destroyed$ = new Subject<void>();

  constructor(private router: Router, private metrika: Metrika) {}

  ngAfterViewInit() {
    let prevPath = this.router.url;
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroyed$),
      )
      .subscribe(() => {
        const newPath = this.router.url;

        if (newPath !== prevPath) {
          this.metrika.hit(newPath, {
            referer: prevPath,
          });
          prevPath = newPath;
          // @ts-ignore
          window.ym(93676774, 'reachGoal', 'test');
        }
      });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
