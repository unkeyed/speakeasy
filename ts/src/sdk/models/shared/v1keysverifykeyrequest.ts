/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class V1KeysVerifyKeyRequest extends SpeakeasyBase {
    /**
     * The id of the api where the key belongs to. This is optional for now but will be required soon.
     *
     * @remarks
     * The key will be verified against the api's configuration. If the key does not belong to the api, the verification will fail.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "apiId" })
    apiId?: string;

    /**
     * The key to verify
     */
    @SpeakeasyMetadata()
    @Expose({ name: "key" })
    key: string;
}