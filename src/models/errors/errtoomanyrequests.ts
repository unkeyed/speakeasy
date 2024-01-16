/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * A machine readable error code.
 */
export enum ErrTooManyRequestsCode {
    TooManyRequests = "TOO_MANY_REQUESTS",
}

export type ErrTooManyRequestsError = {
    /**
     * A machine readable error code.
     */
    code: ErrTooManyRequestsCode;
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
 * The user has sent too many requests in a given amount of time ("rate limiting")
 */
export type ErrTooManyRequestsData = {
    error: ErrTooManyRequestsError;
};

/**
 * The user has sent too many requests in a given amount of time ("rate limiting")
 */
export class ErrTooManyRequests extends Error {
    error: ErrTooManyRequestsError;

    /** The original data that was passed to this error instance. */
    data$: ErrTooManyRequestsData;

    constructor(err: ErrTooManyRequestsData) {
        super("");
        this.data$ = err;

        this.error = err.error;

        const msg = "message" in err && typeof err.message === "string" ? err.message : "";
        const content = JSON.stringify(err);
        this.message = [msg, content].filter(Boolean).join("\n");

        this.name = "ErrTooManyRequests";
    }
}

/** @internal */
export const ErrTooManyRequestsCode$ = z.nativeEnum(ErrTooManyRequestsCode);

/** @internal */
export namespace ErrTooManyRequestsError$ {
    export type Inbound = {
        code: ErrTooManyRequestsCode;
        docs: string;
        message: string;
        requestId: string;
    };

    export const inboundSchema: z.ZodType<ErrTooManyRequestsError, z.ZodTypeDef, Inbound> = z
        .object({
            code: ErrTooManyRequestsCode$,
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
        code: ErrTooManyRequestsCode;
        docs: string;
        message: string;
        requestId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrTooManyRequestsError> = z
        .object({
            code: ErrTooManyRequestsCode$,
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
export namespace ErrTooManyRequests$ {
    export type Inbound = {
        error: ErrTooManyRequestsError$.Inbound;
    };

    export const inboundSchema: z.ZodType<ErrTooManyRequests, z.ZodTypeDef, Inbound> = z
        .object({
            error: z.lazy(() => ErrTooManyRequestsError$.inboundSchema),
        })
        .transform((v) => {
            return new ErrTooManyRequests({
                error: v.error,
            });
        });
    export type Outbound = {
        error: ErrTooManyRequestsError$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrTooManyRequests> = z
        .instanceof(ErrTooManyRequests)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    error: z.lazy(() => ErrTooManyRequestsError$.outboundSchema),
                })
                .transform((v) => {
                    return {
                        error: v.error,
                    };
                })
        );
}
