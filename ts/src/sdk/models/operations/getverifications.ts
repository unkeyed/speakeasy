/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * The granularity of the usage data to fetch, currently only `day` is supported
 */
export enum Granularity {
    Day = "day",
}

export class GetVerificationsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
    end?: number;

    /**
     * The granularity of the usage data to fetch, currently only `day` is supported
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=granularity" })
    granularity?: Granularity;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyId" })
    keyId?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ownerId" })
    ownerId?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
    start?: number;
}

export class Verifications extends SpeakeasyBase {
    /**
     * The number of requests that were rate limited
     */
    @SpeakeasyMetadata()
    @Expose({ name: "rateLimited" })
    rateLimited: number;

    /**
     * The number of successful requests
     */
    @SpeakeasyMetadata()
    @Expose({ name: "success" })
    success: number;

    /**
     * The timestamp of the usage data
     */
    @SpeakeasyMetadata()
    @Expose({ name: "time" })
    time: number;

    /**
     * The number of requests that exceeded the usage limit
     */
    @SpeakeasyMetadata()
    @Expose({ name: "usageExceeded" })
    usageExceeded: number;
}

/**
 * The configuration for a single key
 */
export class GetVerificationsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Verifications })
    @Expose({ name: "verifications" })
    @Type(() => Verifications)
    verifications: Verifications[];
}

export class GetVerificationsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
     */
    @SpeakeasyMetadata()
    errBadRequest?: shared.ErrBadRequest;

    /**
     * This response is sent when a request conflicts with the current state of the server.
     */
    @SpeakeasyMetadata()
    errConflict?: shared.ErrConflict;

    /**
     * The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.
     */
    @SpeakeasyMetadata()
    errForbidden?: shared.ErrForbidden;

    /**
     * The server has encountered a situation it does not know how to handle.
     */
    @SpeakeasyMetadata()
    errInternalServerError?: shared.ErrInternalServerError;

    /**
     * The server cannot find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web.
     */
    @SpeakeasyMetadata()
    errNotFound?: shared.ErrNotFound;

    /**
     * The user has sent too many requests in a given amount of time ("rate limiting")
     */
    @SpeakeasyMetadata()
    errTooManyRequests?: shared.ErrTooManyRequests;

    /**
     * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
     */
    @SpeakeasyMetadata()
    errUnauthorized?: shared.ErrUnauthorized;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * The configuration for a single key
     */
    @SpeakeasyMetadata()
    object?: GetVerificationsResponseBody;
}
