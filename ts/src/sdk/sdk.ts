/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { Apis } from "./apis";
import { Keys } from "./keys";
import { Liveness } from "./liveness";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Production
     */
    "https://api.unkey.dev",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    rootKey?: string;

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.0";
    sdkVersion = "0.1.1";
    genVersion = "2.253.0";
    userAgent = "speakeasy-sdk/typescript 0.1.1 2.253.0 1.0.0 @unkey/api";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

export class Unkey {
    public apis: Apis;
    public keys: Keys;
    public liveness: Liveness;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: new shared.Security({ rootKey: props?.rootKey }),

            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.apis = new Apis(this.sdkConfiguration);
        this.keys = new Keys(this.sdkConfiguration);
        this.liveness = new Liveness(this.sdkConfiguration);
    }
}
