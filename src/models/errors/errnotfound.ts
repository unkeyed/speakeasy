/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * A machine readable error code.
 */
export enum ErrNotFoundCode {
    NotFound = "NOT_FOUND",
}

export type ErrNotFoundError = {
    /**
     * A machine readable error code.
     */
    code: ErrNotFoundCode;
    /**
     * A link to our documentation with more details about this error code
     */
    docs: string;
    /**
     * A human readable explanation of what went wrong
     */
    message: string;
    /**
     * Please always include the requestId in your error report
     */
    requestId: string;
};

/**
 * The server cannot find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web.
 */
export type ErrNotFoundData = {
    error: ErrNotFoundError;
};

/**
 * The server cannot find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web.
 */
export class ErrNotFound extends Error {
    error: ErrNotFoundError;

    /** The original data that was passed to this error instance. */
    data$: ErrNotFoundData;

    constructor(err: ErrNotFoundData, options?: ErrorOptions) {
        super("", options);
        this.data$ = err;

        this.error = err.error;

        const msg = "message" in err && typeof err.message === "string" ? err.message : "";
        const content = JSON.stringify(err);
        this.message = [msg, content].filter(Boolean).join("\n");

        this.name = "ErrNotFound";
    }
}

/** @internal */
export const ErrNotFoundCode$ = z.nativeEnum(ErrNotFoundCode);

/** @internal */
export namespace ErrNotFoundError$ {
    export type Inbound = {
        code: ErrNotFoundCode;
        docs: string;
        message: string;
        requestId: string;
    };

    export const inboundSchema: z.ZodType<ErrNotFoundError, z.ZodTypeDef, Inbound> = z
        .object({
            code: ErrNotFoundCode$,
            docs: z.string(),
            message: z.string(),
            requestId: z.string(),
        })
        .transform((v) => {
            return {
                code: v.code,
                docs: v.docs,
                message: v.message,
                requestId: v.requestId,
            };
        });

    export type Outbound = {
        code: ErrNotFoundCode;
        docs: string;
        message: string;
        requestId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrNotFoundError> = z
        .object({
            code: ErrNotFoundCode$,
            docs: z.string(),
            message: z.string(),
            requestId: z.string(),
        })
        .transform((v) => {
            return {
                code: v.code,
                docs: v.docs,
                message: v.message,
                requestId: v.requestId,
            };
        });
}

/** @internal */
export namespace ErrNotFound$ {
    export type Inbound = {
        error: ErrNotFoundError$.Inbound;
    };

    export const inboundSchema: z.ZodType<ErrNotFound, z.ZodTypeDef, Inbound> = z
        .object({
            error: z.lazy(() => ErrNotFoundError$.inboundSchema),
        })
        .transform((v) => {
            return new ErrNotFound({
                error: v.error,
            });
        });
    export type Outbound = {
        error: ErrNotFoundError$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrNotFound> = z
        .instanceof(ErrNotFound)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    error: z.lazy(() => ErrNotFoundError$.outboundSchema),
                })
                .transform((v) => {
                    return {
                        error: v.error,
                    };
                })
        );
}
