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

import { NewPassengerDto } from '../models/new-passenger-dto';
import { PassengerRm } from '../models/passenger-rm';

@Injectable({
  providedIn: 'root',
})
export class PassengerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation passengerRegister
   */
  static readonly PassengerRegisterPath = '/Passenger';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `passengerRegister()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  passengerRegister$Response(params?: {
    context?: HttpContext
    body?: NewPassengerDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PassengerService.PassengerRegisterPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `passengerRegister$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  passengerRegister(params?: {
    context?: HttpContext
    body?: NewPassengerDto
  }
): Observable<void> {

    return this.passengerRegister$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation passengerFind
   */
  static readonly PassengerFindPath = '/Passenger/{email}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `passengerFind$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  passengerFind$Plain$Response(params: {
    email: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PassengerRm>> {

    const rb = new RequestBuilder(this.rootUrl, PassengerService.PassengerFindPath, 'get');
    if (params) {
      rb.path('email', params.email, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PassengerRm>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `passengerFind$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  passengerFind$Plain(params: {
    email: string;
    context?: HttpContext
  }
): Observable<PassengerRm> {

    return this.passengerFind$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PassengerRm>) => r.body as PassengerRm)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `passengerFind()` instead.
   *
   * This method doesn't expect any request body.
   */
  passengerFind$Response(params: {
    email: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PassengerRm>> {

    const rb = new RequestBuilder(this.rootUrl, PassengerService.PassengerFindPath, 'get');
    if (params) {
      rb.path('email', params.email, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PassengerRm>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `passengerFind$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  passengerFind(params: {
    email: string;
    context?: HttpContext
  }
): Observable<PassengerRm> {

    return this.passengerFind$Response(params).pipe(
      map((r: StrictHttpResponse<PassengerRm>) => r.body as PassengerRm)
    );
  }

}
