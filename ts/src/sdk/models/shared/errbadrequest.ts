/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * A machine readable error code.
 */
export enum ErrBadRequestCode {
    BadRequest = "BAD_REQUEST",
}

export class ErrorT extends SpeakeasyBase {
    /**
     * A machine readable error code.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code: ErrBadRequestCode;

    /**
     * A link to our documentation with more details about this error code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "docs" })
    docs: string;

    /**
     * A human readable explanation of what went wrong
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;

    /**
     * Please always include the requestId in your error report
     */
    @SpeakeasyMetadata()
    @Expose({ name: "requestId" })
    requestId: string;
}

export class ErrBadRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    @Type(() => ErrorT)
    error: ErrorT;
}
