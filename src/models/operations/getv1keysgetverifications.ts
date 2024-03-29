/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The granularity of the usage data to fetch, currently only `day` is supported
 */
export enum Granularity {
    Day = "day",
}

export type GetV1KeysGetVerificationsRequest = {
    keyId?: string | undefined;
    ownerId?: string | undefined;
    start?: number | null | undefined;
    end?: number | null | undefined;
    /**
     * The granularity of the usage data to fetch, currently only `day` is supported
     */
    granularity?: Granularity | undefined;
};

export type Verifications = {
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
export type GetV1KeysGetVerificationsResponseBody = {
    verifications: Array<Verifications>;
};

export type GetV1KeysGetVerificationsResponse = {
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
    object?: GetV1KeysGetVerificationsResponseBody | undefined;
};

/** @internal */
export const Granularity$ = z.nativeEnum(Granularity);

/** @internal */
export namespace GetV1KeysGetVerificationsRequest$ {
    export type Inbound = {
        keyId?: string | undefined;
        ownerId?: string | undefined;
        start?: number | null | undefined;
        end?: number | null | undefined;
        granularity?: Granularity | undefined;
    };

    export const inboundSchema: z.ZodType<GetV1KeysGetVerificationsRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                keyId: z.string().optional(),
                ownerId: z.string().optional(),
                start: z.nullable(z.number().int()).optional(),
                end: z.nullable(z.number().int()).optional(),
                granularity: Granularity$.default(Granularity.Day),
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

    export type Outbound = {
        keyId?: string | undefined;
        ownerId?: string | undefined;
        start?: number | null | undefined;
        end?: number | null | undefined;
        granularity: Granularity;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetV1KeysGetVerificationsRequest
    > = z
        .object({
            keyId: z.string().optional(),
            ownerId: z.string().optional(),
            start: z.nullable(z.number().int()).optional(),
            end: z.nullable(z.number().int()).optional(),
            granularity: Granularity$.default(Granularity.Day),
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
export namespace Verifications$ {
    export type Inbound = {
        time: number;
        success: number;
        rateLimited: number;
        usageExceeded: number;
    };

    export const inboundSchema: z.ZodType<Verifications, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Verifications> = z
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
export namespace GetV1KeysGetVerificationsResponseBody$ {
    export type Inbound = {
        verifications: Array<Verifications$.Inbound>;
    };

    export const inboundSchema: z.ZodType<
        GetV1KeysGetVerificationsResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            verifications: z.array(z.lazy(() => Verifications$.inboundSchema)),
        })
        .transform((v) => {
            return {
                verifications: v.verifications,
            };
        });

    export type Outbound = {
        verifications: Array<Verifications$.Outbound>;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetV1KeysGetVerificationsResponseBody
    > = z
        .object({
            verifications: z.array(z.lazy(() => Verifications$.outboundSchema)),
        })
        .transform((v) => {
            return {
                verifications: v.verifications,
            };
        });
}

/** @internal */
export namespace GetV1KeysGetVerificationsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetV1KeysGetVerificationsResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetV1KeysGetVerificationsResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetV1KeysGetVerificationsResponseBody$.inboundSchema).optional(),
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
        object?: GetV1KeysGetVerificationsResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetV1KeysGetVerificationsResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetV1KeysGetVerificationsResponseBody$.outboundSchema).optional(),
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
