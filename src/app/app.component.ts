import { AfterViewInit, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Metrika } from 'ng-yandex-metrika';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'gen';

  constructor(private router: Router, private metrika: Metrika) {}

  ngAfterViewInit() {
    let prevPath = this.router.url;
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
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
}
