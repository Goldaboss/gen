import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {RequestBuilder} from "./services/request-builder";

@NgModule({
  imports: [HttpClientModule],
  providers: [RequestBuilder]
})
export class DataAccessModule {}
