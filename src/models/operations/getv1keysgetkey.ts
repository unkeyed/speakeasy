/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type GetV1KeysGetKeyRequest = {
    keyId: string;
};

export type GetV1KeysGetKeyResponse = {
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
    key?: components.Key | undefined;
};

/** @internal */
export namespace GetV1KeysGetKeyRequest$ {
    export type Inbound = {
        keyId: string;
    };

    export const inboundSchema: z.ZodType<GetV1KeysGetKeyRequest, z.ZodTypeDef, Inbound> = z
        .object({
            keyId: z.string(),
        })
        .transform((v) => {
            return {
                keyId: v.keyId,
            };
        });

    export type Outbound = {
        keyId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetV1KeysGetKeyRequest> = z
        .object({
            keyId: z.string(),
        })
        .transform((v) => {
            return {
                keyId: v.keyId,
            };
        });
}

/** @internal */
export namespace GetV1KeysGetKeyResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        Key?: components.Key$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetV1KeysGetKeyResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            Key: components.Key$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.Key === undefined ? null : { key: v.Key }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        Key?: components.Key$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetV1KeysGetKeyResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            key: components.Key$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.key === undefined ? null : { Key: v.key }),
            };
        });
}