/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Fast ratelimiting doesn't add latency, while consistent ratelimiting is more accurate.
 *
 * @see {@link https://unkey.dev/docs/features/ratelimiting} - Learn more
 */
export enum PostV1KeysType {
    Fast = "fast",
    Consistent = "consistent",
}

/**
 * Unkey comes with per-key ratelimiting out of the box.
 */
export type PostV1KeysRatelimit = {
    /**
     * Fast ratelimiting doesn't add latency, while consistent ratelimiting is more accurate.
     */
    type?: PostV1KeysType | undefined;
    /**
     * The total amount of burstable requests.
     */
    limit: number;
    /**
     * How many tokens to refill during each refillInterval.
     */
    refillRate: number;
    /**
     * Determines the speed at which tokens are refilled, in milliseconds.
     */
    refillInterval: number;
};

export type PostV1KeysRequestBody = {
    /**
     * Choose an `API` where this key should be created.
     */
    apiId: string;
    /**
     * To make it easier for your users to understand which product an api key belongs to, you can add prefix them.
     *
     * @remarks
     *
     * For example Stripe famously prefixes their customer ids with cus_ or their api keys with sk_live_.
     *
     * The underscore is automatically added if you are defining a prefix, for example: "prefix": "abc" will result in a key like abc_xxxxxxxxx
     *
     */
    prefix?: string | undefined;
    /**
     * The name for your Key. This is not customer facing.
     */
    name?: string | undefined;
    /**
     * The byte length used to generate your key determines its entropy as well as its length. Higher is better, but keys become longer and more annoying to handle. The default is 16 bytes, or 2^^128 possible combinations.
     */
    byteLength?: number | undefined;
    /**
     * Your user’s Id. This will provide a link between Unkey and your customer record.
     *
     * @remarks
     * When validating a key, we will return this back to you, so you can clearly identify your user from their api key.
     */
    ownerId?: string | undefined;
    /**
     * This is a place for dynamic meta data, anything that feels useful for you should go here
     */
    meta?: Record<string, any> | undefined;
    /**
     * You can auto expire keys by providing a unix timestamp in milliseconds. Once Keys expire they will automatically be disabled and are no longer valid unless you enable them again.
     */
    expires?: number | undefined;
    /**
     * You can limit the number of requests a key can make. Once a key reaches 0 remaining requests, it will automatically be disabled and is no longer valid unless you update it.
     */
    remaining?: number | undefined;
    /**
     * Unkey comes with per-key ratelimiting out of the box.
     */
    ratelimit?: PostV1KeysRatelimit | undefined;
};

export type PostV1KeysRequest = {
    requestBody: PostV1KeysRequestBody;
};

/**
 * The configuration for an api
 */
export type PostV1KeysResponseBody = {
    /**
     * The id of the key. This is not a secret and can be stored as a reference if you wish. You need the keyId to update or delete a key later.
     */
    keyId: string;
    /**
     * The newly created api key, do not store this on your own system but pass it along to your user.
     */
    key: string;
};

export type PostV1KeysResponse = {
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
    object?: PostV1KeysResponseBody | undefined;
};

/** @internal */
export const PostV1KeysType$ = z.nativeEnum(PostV1KeysType);

/** @internal */
export namespace PostV1KeysRatelimit$ {
    export type Inbound = {
        type?: PostV1KeysType | undefined;
        limit: number;
        refillRate: number;
        refillInterval: number;
    };

    export const inboundSchema: z.ZodType<PostV1KeysRatelimit, z.ZodTypeDef, Inbound> = z
        .object({
            type: PostV1KeysType$.default(PostV1KeysType.Fast),
            limit: z.number().int(),
            refillRate: z.number().int(),
            refillInterval: z.number().int(),
        })
        .transform((v) => {
            return {
                type: v.type,
                limit: v.limit,
                refillRate: v.refillRate,
                refillInterval: v.refillInterval,
            };
        });

    export type Outbound = {
        type: PostV1KeysType;
        limit: number;
        refillRate: number;
        refillInterval: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostV1KeysRatelimit> = z
        .object({
            type: PostV1KeysType$.default(PostV1KeysType.Fast),
            limit: z.number().int(),
            refillRate: z.number().int(),
            refillInterval: z.number().int(),
        })
        .transform((v) => {
            return {
                type: v.type,
                limit: v.limit,
                refillRate: v.refillRate,
                refillInterval: v.refillInterval,
            };
        });
}

/** @internal */
export namespace PostV1KeysRequestBody$ {
    export type Inbound = {
        apiId: string;
        prefix?: string | undefined;
        name?: string | undefined;
        byteLength?: number | undefined;
        ownerId?: string | undefined;
        meta?: Record<string, any> | undefined;
        expires?: number | undefined;
        remaining?: number | undefined;
        ratelimit?: PostV1KeysRatelimit$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<PostV1KeysRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            apiId: z.string(),
            prefix: z.string().optional(),
            name: z.string().optional(),
            byteLength: z.number().int().default(16),
            ownerId: z.string().optional(),
            meta: z.record(z.any()).optional(),
            expires: z.number().int().optional(),
            remaining: z.number().int().optional(),
            ratelimit: z.lazy(() => PostV1KeysRatelimit$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                apiId: v.apiId,
                ...(v.prefix === undefined ? null : { prefix: v.prefix }),
                ...(v.name === undefined ? null : { name: v.name }),
                byteLength: v.byteLength,
                ...(v.ownerId === undefined ? null : { ownerId: v.ownerId }),
                ...(v.meta === undefined ? null : { meta: v.meta }),
                ...(v.expires === undefined ? null : { expires: v.expires }),
                ...(v.remaining === undefined ? null : { remaining: v.remaining }),
                ...(v.ratelimit === undefined ? null : { ratelimit: v.ratelimit }),
            };
        });

    export type Outbound = {
        apiId: string;
        prefix?: string | undefined;
        name?: string | undefined;
        byteLength: number;
        ownerId?: string | undefined;
        meta?: Record<string, any> | undefined;
        expires?: number | undefined;
        remaining?: number | undefined;
        ratelimit?: PostV1KeysRatelimit$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostV1KeysRequestBody> = z
        .object({
            apiId: z.string(),
            prefix: z.string().optional(),
            name: z.string().optional(),
            byteLength: z.number().int().default(16),
            ownerId: z.string().optional(),
            meta: z.record(z.any()).optional(),
            expires: z.number().int().optional(),
            remaining: z.number().int().optional(),
            ratelimit: z.lazy(() => PostV1KeysRatelimit$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                apiId: v.apiId,
                ...(v.prefix === undefined ? null : { prefix: v.prefix }),
                ...(v.name === undefined ? null : { name: v.name }),
                byteLength: v.byteLength,
                ...(v.ownerId === undefined ? null : { ownerId: v.ownerId }),
                ...(v.meta === undefined ? null : { meta: v.meta }),
                ...(v.expires === undefined ? null : { expires: v.expires }),
                ...(v.remaining === undefined ? null : { remaining: v.remaining }),
                ...(v.ratelimit === undefined ? null : { ratelimit: v.ratelimit }),
            };
        });
}

/** @internal */
export namespace PostV1KeysRequest$ {
    export type Inbound = {
        RequestBody: PostV1KeysRequestBody$.Inbound;
    };

    export const inboundSchema: z.ZodType<PostV1KeysRequest, z.ZodTypeDef, Inbound> = z
        .object({
            RequestBody: z.lazy(() => PostV1KeysRequestBody$.inboundSchema),
        })
        .transform((v) => {
            return {
                requestBody: v.RequestBody,
            };
        });

    export type Outbound = {
        RequestBody: PostV1KeysRequestBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostV1KeysRequest> = z
        .object({
            requestBody: z.lazy(() => PostV1KeysRequestBody$.outboundSchema),
        })
        .transform((v) => {
            return {
                RequestBody: v.requestBody,
            };
        });
}

/** @internal */
export namespace PostV1KeysResponseBody$ {
    export type Inbound = {
        keyId: string;
        key: string;
    };

    export const inboundSchema: z.ZodType<PostV1KeysResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            keyId: z.string(),
            key: z.string(),
        })
        .transform((v) => {
            return {
                keyId: v.keyId,
                key: v.key,
            };
        });

    export type Outbound = {
        keyId: string;
        key: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostV1KeysResponseBody> = z
        .object({
            keyId: z.string(),
            key: z.string(),
        })
        .transform((v) => {
            return {
                keyId: v.keyId,
                key: v.key,
            };
        });
}

/** @internal */
export namespace PostV1KeysResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: PostV1KeysResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<PostV1KeysResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => PostV1KeysResponseBody$.inboundSchema).optional(),
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
        object?: PostV1KeysResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostV1KeysResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => PostV1KeysResponseBody$.outboundSchema).optional(),
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