import {Injectable} from "@angular/core";
import {HttpClient, HttpParameterCodec, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Params} from "@angular/router";


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

export class CustomQueryEncoderHelper implements HttpParameterCodec {
  encodeKey(k: string): string {
    return encodeURIComponent(k);
  }

  encodeValue(v: string): string {
    return encodeURIComponent(v);
  }

  decodeKey(k: string): string {
    return decodeURIComponent(k);
  }

  decodeValue(v: string): string {
    return decodeURIComponent(v);
  }
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

  public withParams(params: Params) {
    this.options = {
      ...this.options,
      params: this.toHttpParams(params),
    }
    return this;
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

  private request(method: RequestMethods) {
    return this.http.request(method, this.uri, this.options);
  }

  private toHttpParams(params: Params) {
      return Object.getOwnPropertyNames(params).reduce(
        (p, key) => p.set(key, params[key]),
        new HttpParams({ encoder: new CustomQueryEncoderHelper() }),
      );
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
