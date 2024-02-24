# openapi

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/unkeyed/speakeasy
```

### Yarn

```bash
yarn add https://github.com/unkeyed/speakeasy
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { SDK } from "openapi";

async function run() {
    const sdk = new SDK({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.getV1Liveness();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [SDK](docs/sdks/sdk/README.md)

* [getV1Liveness](docs/sdks/sdk/README.md#getv1liveness)
* [getV1KeysGetKey](docs/sdks/sdk/README.md#getv1keysgetkey)
* [postV1KeysDeleteKey](docs/sdks/sdk/README.md#postv1keysdeletekey)
* [postV1KeysCreateKey](docs/sdks/sdk/README.md#postv1keyscreatekey)
* [postV1KeysVerifyKey](docs/sdks/sdk/README.md#postv1keysverifykey)
* [postV1KeysUpdateKey](docs/sdks/sdk/README.md#postv1keysupdatekey)
* [postV1KeysUpdateRemaining](docs/sdks/sdk/README.md#postv1keysupdateremaining)
* [getV1KeysGetVerifications](docs/sdks/sdk/README.md#getv1keysgetverifications)
* [getVxKeysGetVerifications](docs/sdks/sdk/README.md#getvxkeysgetverifications)
* [getV1ApisGetApi](docs/sdks/sdk/README.md#getv1apisgetapi)
* [postV1ApisCreateApi](docs/sdks/sdk/README.md#postv1apiscreateapi)
* [getV1ApisListKeys](docs/sdks/sdk/README.md#getv1apislistkeys)
* [postV1ApisDeleteApi](docs/sdks/sdk/README.md#postv1apisdeleteapi)
* [putV1KeysKeyId](docs/sdks/sdk/README.md#putv1keyskeyid)
* [getV1KeysKeyId](docs/sdks/sdk/README.md#getv1keyskeyid)
* [deleteV1KeysKeyId](docs/sdks/sdk/README.md#deletev1keyskeyid)
* [postV1Keys](docs/sdks/sdk/README.md#postv1keys)
* [postV1KeysVerify](docs/sdks/sdk/README.md#postv1keysverify)
* [postV1Apis](docs/sdks/sdk/README.md#postv1apis)
* [getV1ApisApiId](docs/sdks/sdk/README.md#getv1apisapiid)
* [deleteV1ApisApiId](docs/sdks/sdk/README.md#deletev1apisapiid)
* [getV1ApisApiIdKeys](docs/sdks/sdk/README.md#getv1apisapiidkeys)
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object                  | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrBadRequest          | 400                           | application/json              |
| errors.ErrUnauthorized        | 401                           | application/json              |
| errors.ErrForbidden           | 403                           | application/json              |
| errors.ErrNotFound            | 404                           | application/json              |
| errors.ErrConflict            | 409                           | application/json              |
| errors.ErrTooManyRequests     | 429                           | application/json              |
| errors.ErrInternalServerError | 500                           | application/json              |
| errors.SDKError               | 4xx-5xx                       | */*                           |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { SDK } from "openapi";
import * as errors from "openapi/models/errors";

async function run() {
    const sdk = new SDK({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    let result;
    try {
        result = await sdk.getV1Liveness();
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof errors.ErrBadRequest: {
                console.error(err); // handle exception
                return;
            }
            case err instanceof errors.ErrUnauthorized: {
                console.error(err); // handle exception
                return;
            }
            case err instanceof errors.ErrForbidden: {
                console.error(err); // handle exception
                return;
            }
            case err instanceof errors.ErrNotFound: {
                console.error(err); // handle exception
                return;
            }
            case err instanceof errors.ErrConflict: {
                console.error(err); // handle exception
                return;
            }
            case err instanceof errors.ErrTooManyRequests: {
                console.error(err); // handle exception
                return;
            }
            case err instanceof errors.ErrInternalServerError: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.unkey.dev` | None |

```typescript
import { SDK } from "openapi";

async function run() {
    const sdk = new SDK({
        serverIdx: 0,
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.getV1Liveness();

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { SDK } from "openapi";

async function run() {
    const sdk = new SDK({
        serverURL: "https://api.unkey.dev",
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.getV1Liveness();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { SDK } from "openapi";
import { HTTPClient } from "openapi/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new SDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `bearerAuth` | http         | HTTP Bearer  |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { SDK } from "openapi";

async function run() {
    const sdk = new SDK({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.getV1Liveness();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
