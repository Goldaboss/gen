import {NgModule, Provider} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {NgxsModule} from "@ngxs/store";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthInterceptor} from "./shared/auth.interceptor";
import {HeaderModule} from "./header/header.module";
import {AuthModule} from "./auth/auth.module";
import {MainModule} from "./main/main-module";
import {UserModule} from "./user/user.module";
import {DataAccessModule} from "./modules/data-access/data-access.module";

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    AuthModule,
    MainModule,
    UserModule,
    DataAccessModule,
    NgxsModule.forRoot([])
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule {
}
