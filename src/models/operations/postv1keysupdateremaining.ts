/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The operation you want to perform on the remaining count
 */
export enum Op {
    Increment = "increment",
    Decrement = "decrement",
    Set = "set",
}

export type PostV1KeysUpdateRemainingRequestBody = {
    /**
     * The id of the key you want to modify
     */
    keyId: string;
    /**
     * The operation you want to perform on the remaining count
     */
    op: Op;
    /**
     * The value you want to set, add or subtract the remaining count by
     */
    value: number | null;
};

/**
 * The configuration for an api
 */
export type PostV1KeysUpdateRemainingResponseBody = {
    /**
     * The number of remaining requests for this key after updating it. `null` means unlimited.
     */
    remaining: number | null;
};

export type PostV1KeysUpdateRemainingResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * The configuration for an api
     */
    object?: PostV1KeysUpdateRemainingResponseBody | undefined;
};

/** @internal */
export const Op$ = z.nativeEnum(Op);

/** @internal */
export namespace PostV1KeysUpdateRemainingRequestBody$ {
    export type Inbound = {
        keyId: string;
        op: Op;
        value: number | null;
    };

    export const inboundSchema: z.ZodType<
        PostV1KeysUpdateRemainingRequestBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            keyId: z.string(),
            op: Op$,
            value: z.nullable(z.number().int()),
        })
        .transform((v) => {
            return {
                keyId: v.keyId,
                op: v.op,
                value: v.value,
            };
        });

    export type Outbound = {
        keyId: string;
        op: Op;
        value: number | null;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostV1KeysUpdateRemainingRequestBody
    > = z
        .object({
            keyId: z.string(),
            op: Op$,
            value: z.nullable(z.number().int()),
        })
        .transform((v) => {
            return {
                keyId: v.keyId,
                op: v.op,
                value: v.value,
            };
        });
}

/** @internal */
export namespace PostV1KeysUpdateRemainingResponseBody$ {
    export type Inbound = {
        remaining: number | null;
    };

    export const inboundSchema: z.ZodType<
        PostV1KeysUpdateRemainingResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            remaining: z.nullable(z.number().int()),
        })
        .transform((v) => {
            return {
                remaining: v.remaining,
            };
        });

    export type Outbound = {
        remaining: number | null;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostV1KeysUpdateRemainingResponseBody
    > = z
        .object({
            remaining: z.nullable(z.number().int()),
        })
        .transform((v) => {
            return {
                remaining: v.remaining,
            };
        });
}

/** @internal */
export namespace PostV1KeysUpdateRemainingResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: PostV1KeysUpdateRemainingResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        PostV1KeysUpdateRemainingResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => PostV1KeysUpdateRemainingResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: PostV1KeysUpdateRemainingResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostV1KeysUpdateRemainingResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => PostV1KeysUpdateRemainingResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
