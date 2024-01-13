/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type DeleteV1ApisApiIdRequest = {
    apiId: string;
};

/**
 * The api was successfully deleted, it may take up to 30s for this to take effect in all regions
 */
export type DeleteV1ApisApiIdResponseBody = {};

export type DeleteV1ApisApiIdResponse = {
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
     * The api was successfully deleted, it may take up to 30s for this to take effect in all regions
     */
    object?: DeleteV1ApisApiIdResponseBody | undefined;
};

/** @internal */
export namespace DeleteV1ApisApiIdRequest$ {
    export type Inbound = {
        apiId: string;
    };

    export const inboundSchema: z.ZodType<DeleteV1ApisApiIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            apiId: z.string(),
        })
        .transform((v) => {
            return {
                apiId: v.apiId,
            };
        });

    export type Outbound = {
        apiId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteV1ApisApiIdRequest> = z
        .object({
            apiId: z.string(),
        })
        .transform((v) => {
            return {
                apiId: v.apiId,
            };
        });
}

/** @internal */
export namespace DeleteV1ApisApiIdResponseBody$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<DeleteV1ApisApiIdResponseBody, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteV1ApisApiIdResponseBody> =
        z.object({});
}

/** @internal */
export namespace DeleteV1ApisApiIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: DeleteV1ApisApiIdResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteV1ApisApiIdResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => DeleteV1ApisApiIdResponseBody$.inboundSchema).optional(),
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
        object?: DeleteV1ApisApiIdResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteV1ApisApiIdResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => DeleteV1ApisApiIdResponseBody$.outboundSchema).optional(),
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
