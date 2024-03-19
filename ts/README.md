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
npm add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Unkey } from "@unkey/api";

async function run() {
    const sdk = new Unkey({
        rootKey: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const res = await sdk.apis.createApi({
        name: "my-api",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [apis](docs/sdks/apis/README.md)

* [createApi](docs/sdks/apis/README.md#createapi)
* [deleteApi](docs/sdks/apis/README.md#deleteapi)
* [getApi](docs/sdks/apis/README.md#getapi)
* [listKeys](docs/sdks/apis/README.md#listkeys)

### [keys](docs/sdks/keys/README.md)

* [createKey](docs/sdks/keys/README.md#createkey)
* [deleteKey](docs/sdks/keys/README.md#deletekey)
* [getKey](docs/sdks/keys/README.md#getkey)
* [getVerifications](docs/sdks/keys/README.md#getverifications)
* [updateKey](docs/sdks/keys/README.md#updatekey)
* [updateRemaining](docs/sdks/keys/README.md#updateremaining)
* [verifyKey](docs/sdks/keys/README.md#verifykey)

### [liveness](docs/sdks/liveness/README.md)

* [getV1Liveness](docs/sdks/liveness/README.md#getv1liveness)
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Example

```typescript
import { Unkey } from "@unkey/api";

async function run() {
    const sdk = new Unkey({
        rootKey: "<YOUR_BEARER_TOKEN_HERE>",
    });

    let res;
    try {
        res = await sdk.apis.createApi({
            name: "my-api",
        });
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.unkey.dev` | None |

#### Example

```typescript
import { Unkey } from "@unkey/api";

async function run() {
    const sdk = new Unkey({
        serverIdx: 0,
        rootKey: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const res = await sdk.apis.createApi({
        name: "my-api",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Unkey } from "@unkey/api";

async function run() {
    const sdk = new Unkey({
        serverURL: "https://api.unkey.dev",
        rootKey: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const res = await sdk.apis.createApi({
        name: "my-api",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { @unkey/api } from "Unkey";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new Unkey({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name        | Type        | Scheme      |
| ----------- | ----------- | ----------- |
| `rootKey`   | http        | HTTP Bearer |

To authenticate with the API the `rootKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Unkey } from "@unkey/api";

async function run() {
    const sdk = new Unkey({
        rootKey: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const res = await sdk.apis.createApi({
        name: "my-api",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Authentication [security] -->

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
