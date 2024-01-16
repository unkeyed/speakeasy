/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * The granularity of the usage data to fetch, currently only `day` is supported
 */
export enum QueryParamGranularity {
    Day = "day",
}

export type GetVxKeysGetVerificationsRequest = {
    keyId?: string | undefined;
    ownerId?: string | undefined;
    start?: number | null | undefined;
    end?: number | null | undefined;
    /**
     * The granularity of the usage data to fetch, currently only `day` is supported
     */
    granularity?: QueryParamGranularity | undefined;
};

export type GetVxKeysGetVerificationsVerifications = {
    /**
     * The timestamp of the usage data
     */
    time: number;
    /**
     * The number of successful requests
     */
    success: number;
    /**
     * The number of requests that were rate limited
     */
    rateLimited: number;
    /**
     * The number of requests that exceeded the usage limit
     */
    usageExceeded: number;
};

/**
 * The configuration for a single key
 */
export type GetVxKeysGetVerificationsResponseBody = {
    verifications: Array<GetVxKeysGetVerificationsVerifications>;
};

export type GetVxKeysGetVerificationsResponse = {
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
     * The configuration for a single key
     */
    object?: GetVxKeysGetVerificationsResponseBody | undefined;
};

/** @internal */
export const QueryParamGranularity$ = z.nativeEnum(QueryParamGranularity);

/** @internal */
export namespace GetVxKeysGetVerificationsRequest$ {
    export type Inbound = {
        keyId?: string | undefined;
        ownerId?: string | undefined;
        start?: number | null | undefined;
        end?: number | null | undefined;
        granularity?: QueryParamGranularity | undefined;
    };

    export const inboundSchema: z.ZodType<GetVxKeysGetVerificationsRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                keyId: z.string().optional(),
                ownerId: z.string().optional(),
                start: z.nullable(z.number().int()).optional(),
                end: z.nullable(z.number().int()).optional(),
                granularity: QueryParamGranularity$.default(QueryParamGranularity.Day),
            })
            .transform((v) => {
                return {
                    ...(v.keyId === undefined ? null : { keyId: v.keyId }),
                    ...(v.ownerId === undefined ? null : { ownerId: v.ownerId }),
                    ...(v.start === undefined ? null : { start: v.start }),
                    ...(v.end === undefined ? null : { end: v.end }),
                    ...(v.granularity === undefined ? null : { granularity: v.granularity }),
                };
            });

    export type Outbound = {
        keyId?: string | undefined;
        ownerId?: string | undefined;
        start?: number | null | undefined;
        end?: number | null | undefined;
        granularity: QueryParamGranularity;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetVxKeysGetVerificationsRequest
    > = z
        .object({
            keyId: z.string().optional(),
            ownerId: z.string().optional(),
            start: z.nullable(z.number().int()).optional(),
            end: z.nullable(z.number().int()).optional(),
            granularity: QueryParamGranularity$.default(QueryParamGranularity.Day),
        })
        .transform((v) => {
            return {
                ...(v.keyId === undefined ? null : { keyId: v.keyId }),
                ...(v.ownerId === undefined ? null : { ownerId: v.ownerId }),
                ...(v.start === undefined ? null : { start: v.start }),
                ...(v.end === undefined ? null : { end: v.end }),
                granularity: v.granularity,
            };
        });
}

/** @internal */
export namespace GetVxKeysGetVerificationsVerifications$ {
    export type Inbound = {
        time: number;
        success: number;
        rateLimited: number;
        usageExceeded: number;
    };

    export const inboundSchema: z.ZodType<
        GetVxKeysGetVerificationsVerifications,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            time: z.number().int(),
            success: z.number(),
            rateLimited: z.number(),
            usageExceeded: z.number(),
        })
        .transform((v) => {
            return {
                time: v.time,
                success: v.success,
                rateLimited: v.rateLimited,
                usageExceeded: v.usageExceeded,
            };
        });

    export type Outbound = {
        time: number;
        success: number;
        rateLimited: number;
        usageExceeded: number;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetVxKeysGetVerificationsVerifications
    > = z
        .object({
            time: z.number().int(),
            success: z.number(),
            rateLimited: z.number(),
            usageExceeded: z.number(),
        })
        .transform((v) => {
            return {
                time: v.time,
                success: v.success,
                rateLimited: v.rateLimited,
                usageExceeded: v.usageExceeded,
            };
        });
}

/** @internal */
export namespace GetVxKeysGetVerificationsResponseBody$ {
    export type Inbound = {
        verifications: Array<GetVxKeysGetVerificationsVerifications$.Inbound>;
    };

    export const inboundSchema: z.ZodType<
        GetVxKeysGetVerificationsResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            verifications: z.array(
                z.lazy(() => GetVxKeysGetVerificationsVerifications$.inboundSchema)
            ),
        })
        .transform((v) => {
            return {
                verifications: v.verifications,
            };
        });

    export type Outbound = {
        verifications: Array<GetVxKeysGetVerificationsVerifications$.Outbound>;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetVxKeysGetVerificationsResponseBody
    > = z
        .object({
            verifications: z.array(
                z.lazy(() => GetVxKeysGetVerificationsVerifications$.outboundSchema)
            ),
        })
        .transform((v) => {
            return {
                verifications: v.verifications,
            };
        });
}

/** @internal */
export namespace GetVxKeysGetVerificationsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetVxKeysGetVerificationsResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetVxKeysGetVerificationsResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetVxKeysGetVerificationsResponseBody$.inboundSchema).optional(),
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
        object?: GetVxKeysGetVerificationsResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetVxKeysGetVerificationsResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetVxKeysGetVerificationsResponseBody$.outboundSchema).optional(),
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
