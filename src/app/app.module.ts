import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth.interceptor';
import { HeaderModule } from './modules/header/header.module';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main-module';
import { UserModule } from './user/user.module';
import { DataAccessModule } from './modules/data-access/data-access.module';
import { MetrikaModule } from 'ng-yandex-metrika';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor,
};

let defaultCounter;

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    AuthModule,
    MainModule,
    UserModule,
    DataAccessModule,
    NgxsModule.forRoot([]),
    MetrikaModule.forRoot(
      { id: 93676774, webvisor: true }, // CounterConfig | CounterConfig[]
      // Необязательный параметр по умолчанию первый попавшийся,
      // Можно задать ид счетчика, либо порядковый номер в массиве.
      defaultCounter, // number | string
    ),
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
