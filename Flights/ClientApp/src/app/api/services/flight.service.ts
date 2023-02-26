/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { FlightRm } from '../models/flight-rm';

@Injectable({
  providedIn: 'root',
})
export class FlightService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation flightSearch
   */
  static readonly FlightSearchPath = '/Flight';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `flightSearch$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  flightSearch$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<FlightRm>>> {

    const rb = new RequestBuilder(this.rootUrl, FlightService.FlightSearchPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<FlightRm>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `flightSearch$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  flightSearch$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<FlightRm>> {

    return this.flightSearch$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<FlightRm>>) => r.body as Array<FlightRm>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `flightSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  flightSearch$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<FlightRm>>> {

    const rb = new RequestBuilder(this.rootUrl, FlightService.FlightSearchPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<FlightRm>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `flightSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  flightSearch(params?: {
    context?: HttpContext
  }
): Observable<Array<FlightRm>> {

    return this.flightSearch$Response(params).pipe(
      map((r: StrictHttpResponse<Array<FlightRm>>) => r.body as Array<FlightRm>)
    );
  }

  /**
   * Path part for operation flightFind
   */
  static readonly FlightFindPath = '/Flight/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `flightFind$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  flightFind$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<FlightRm>> {

    const rb = new RequestBuilder(this.rootUrl, FlightService.FlightFindPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FlightRm>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `flightFind$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  flightFind$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<FlightRm> {

    return this.flightFind$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<FlightRm>) => r.body as FlightRm)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `flightFind()` instead.
   *
   * This method doesn't expect any request body.
   */
  flightFind$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<FlightRm>> {

    const rb = new RequestBuilder(this.rootUrl, FlightService.FlightFindPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FlightRm>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `flightFind$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  flightFind(params: {
    id: string;
    context?: HttpContext
  }
): Observable<FlightRm> {

    return this.flightFind$Response(params).pipe(
      map((r: StrictHttpResponse<FlightRm>) => r.body as FlightRm)
    );
  }

}
