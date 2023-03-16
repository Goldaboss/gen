import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";


interface HttpHeaders {
  [header: string]: string | string[];
}

enum ObserveType {
  Body = 'body',
  Events = 'events',
  Response = 'response',
}

enum RequestMethods {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
  Patch = 'PATCH',
}

interface RequestOptions {
  body?: unknown;
  headers?: HttpHeaders;
  observe?: ObserveType;
  params?: HttpParams;
}

class Builder {
  private options: RequestOptions = {};

  constructor(private readonly http: HttpClient, private uri: string) {
  }

  public withBody(body: unknown): Builder {
    this.options.body = body;

    return this;
  }

  public withHeaders(headers: HttpHeaders): Builder {
    this.options = { ...this.options, headers };

    return this;
  }

  private request(method: RequestMethods) {
    return this.http.request(method, this.uri, this.options);
  }

  public get<T>(): Observable<T> {
    return this.request(RequestMethods.Get)
  }
  public post<T>(): Observable<T> {
    return this.request(RequestMethods.Post)
  }

  public patch<T>(): Observable<T> {
    return this.request(RequestMethods.Patch)
  }

  public put<T>(): Observable<T> {
    return this.request(RequestMethods.Put)
  }

  public delete<T>(): Observable<T> {
    return this.request(RequestMethods.Delete)
  }

}

@Injectable()
export class RequestBuilder {
  constructor(private http: HttpClient) {
  }

  public to(uri: string, apiUrl: string = 'https://dummyjson.com') {
    return new Builder(this.http, `${apiUrl}/${uri}`)
  }
}
