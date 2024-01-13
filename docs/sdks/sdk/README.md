# SDK


## Overview

### Available Operations

* [getV1Liveness](#getv1liveness)
* [getV1KeysGetKey](#getv1keysgetkey)
* [postV1KeysDeleteKey](#postv1keysdeletekey)
* [postV1KeysCreateKey](#postv1keyscreatekey)
* [postV1KeysVerifyKey](#postv1keysverifykey)
* [postV1KeysUpdateKey](#postv1keysupdatekey)
* [postV1KeysUpdateRemaining](#postv1keysupdateremaining)
* [getV1KeysGetVerifications](#getv1keysgetverifications)
* [getVxKeysGetVerifications](#getvxkeysgetverifications)
* [getV1ApisGetApi](#getv1apisgetapi)
* [postV1ApisCreateApi](#postv1apiscreateapi)
* [getV1ApisListKeys](#getv1apislistkeys)
* [postV1ApisDeleteApi](#postv1apisdeleteapi)
* [putV1KeysKeyId](#putv1keyskeyid)
* [getV1KeysKeyId](#getv1keyskeyid)
* [deleteV1KeysKeyId](#deletev1keyskeyid)
* [postV1Keys](#postv1keys)
* [postV1KeysVerify](#postv1keysverify)
* [postV1Apis](#postv1apis)
* [getV1ApisApiId](#getv1apisapiid)
* [deleteV1ApisApiId](#deletev1apisapiid)
* [getV1ApisApiIdKeys](#getv1apisapiidkeys)

## getV1Liveness

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.getV1Liveness();

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetV1LivenessResponse](../../models/operations/getv1livenessresponse.md)>**
### Errors

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

## getV1KeysGetKey

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const keyId = "key_1234";
  
  const res = await sdk.getV1KeysGetKey(keyId);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `keyId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.GetV1KeysGetKeyResponse](../../models/operations/getv1keysgetkeyresponse.md)>**
### Errors

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

## postV1KeysDeleteKey

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.postV1KeysDeleteKey({
    keyId: "key_1234",
  });

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1KeysDeleteKeyRequestBody](../../models/operations/postv1keysdeletekeyrequestbody.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostV1KeysDeleteKeyResponse](../../models/operations/postv1keysdeletekeyresponse.md)>**
### Errors

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

## postV1KeysCreateKey

### Example Usage

```typescript
import { SDK } from "openapi";
import { Interval, TypeT } from "openapi/models/operations";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.postV1KeysCreateKey({
    apiId: "api_123",
    name: "my key",
    ownerId: "team_123",
    meta: {
      "billingTier": "string",
      "trialEnds": "string",
    },
    expires: 1623869797161,
    remaining: 1000,
    refill: {
      interval: Interval.Monthly,
      amount: 503140,
    },
    ratelimit: {
      type: TypeT.Fast,
      limit: 728674,
      refillRate: 204573,
      refillInterval: 983586,
    },
    enabled: false,
  });

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1KeysCreateKeyRequestBody](../../models/operations/postv1keyscreatekeyrequestbody.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostV1KeysCreateKeyResponse](../../models/operations/postv1keyscreatekeyresponse.md)>**
### Errors

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

## postV1KeysVerifyKey

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.postV1KeysVerifyKey({
    apiId: "api_1234",
    key: "sk_1234",
  });

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1KeysVerifyKeyRequestBody](../../models/operations/postv1keysverifykeyrequestbody.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostV1KeysVerifyKeyResponse](../../models/operations/postv1keysverifykeyresponse.md)>**
### Errors

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

## postV1KeysUpdateKey

### Example Usage

```typescript
import { SDK } from "openapi";
import { PostV1KeysUpdateKeyInterval, PostV1KeysUpdateKeyType } from "openapi/models/operations";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.postV1KeysUpdateKey({
    keyId: "key_123",
    name: "Customer X",
    ownerId: "user_123",
    meta: {
      "roles": "string",
      "stripeCustomerId": "string",
    },
    expires: 0,
    ratelimit: {
      type: PostV1KeysUpdateKeyType.Consistent,
      limit: 658469,
      refillRate: 252384,
      refillInterval: 140067,
    },
    remaining: 1000,
    refill: {
      interval: PostV1KeysUpdateKeyInterval.Monthly,
      amount: 524403,
    },
    enabled: true,
  });

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1KeysUpdateKeyRequestBody](../../models/operations/postv1keysupdatekeyrequestbody.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostV1KeysUpdateKeyResponse](../../models/operations/postv1keysupdatekeyresponse.md)>**
### Errors

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

## postV1KeysUpdateRemaining

### Example Usage

```typescript
import { SDK } from "openapi";
import { Op } from "openapi/models/operations";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.postV1KeysUpdateRemaining({
    keyId: "key_123",
    op: Op.Decrement,
    value: 1,
  });

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1KeysUpdateRemainingRequestBody](../../models/operations/postv1keysupdateremainingrequestbody.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostV1KeysUpdateRemainingResponse](../../models/operations/postv1keysupdateremainingresponse.md)>**
### Errors

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

## getV1KeysGetVerifications

### Example Usage

```typescript
import { SDK } from "openapi";
import { Granularity } from "openapi/models/operations";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.getV1KeysGetVerifications({
    keyId: "key_1234",
    ownerId: "chronark",
    start: 1620000000000,
    end: 1620000000000,
    granularity: Granularity.Day,
  });

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1KeysGetVerificationsRequest](../../models/operations/getv1keysgetverificationsrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetV1KeysGetVerificationsResponse](../../models/operations/getv1keysgetverificationsresponse.md)>**
### Errors

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

## getVxKeysGetVerifications

### Example Usage

```typescript
import { SDK } from "openapi";
import { QueryParamGranularity } from "openapi/models/operations";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.getVxKeysGetVerifications({
    keyId: "key_1234",
    ownerId: "chronark",
    start: 1620000000000,
    end: 1620000000000,
    granularity: QueryParamGranularity.Day,
  });

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetVxKeysGetVerificationsRequest](../../models/operations/getvxkeysgetverificationsrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetVxKeysGetVerificationsResponse](../../models/operations/getvxkeysgetverificationsresponse.md)>**
### Errors

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

## getV1ApisGetApi

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const apiId = "api_1234";
  
  const res = await sdk.getV1ApisGetApi(apiId);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `apiId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.GetV1ApisGetApiResponse](../../models/operations/getv1apisgetapiresponse.md)>**
### Errors

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

## postV1ApisCreateApi

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.postV1ApisCreateApi({
    name: "my-api",
  });

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1ApisCreateApiRequestBody](../../models/operations/postv1apiscreateapirequestbody.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostV1ApisCreateApiResponse](../../models/operations/postv1apiscreateapiresponse.md)>**
### Errors

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

## getV1ApisListKeys

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const apiId = "api_1234";
  const limit = 100;
  const cursor = "string";
  const ownerId = "string";
  
  const res = await sdk.getV1ApisListKeys(apiId, limit, cursor, ownerId);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `apiId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `limit`                                                                                                                                                                        | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `cursor`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `ownerId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.GetV1ApisListKeysResponse](../../models/operations/getv1apislistkeysresponse.md)>**
### Errors

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

## postV1ApisDeleteApi

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.postV1ApisDeleteApi({
    apiId: "api_1234",
  });

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1ApisDeleteApiRequestBody](../../models/operations/postv1apisdeleteapirequestbody.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostV1ApisDeleteApiResponse](../../models/operations/postv1apisdeleteapiresponse.md)>**
### Errors

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

## putV1KeysKeyId

### Example Usage

```typescript
import { SDK } from "openapi";
import { PutV1KeysKeyIdType } from "openapi/models/operations";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const keyId = "key_123";
  const requestBody = {
    name: "Customer X",
    ownerId: "user_123",
    meta: {
      "roles": "string",
      "stripeCustomerId": "string",
    },
    expires: 0,
    ratelimit: {
      type: PutV1KeysKeyIdType.Fast,
      limit: 235123,
      refillRate: 341056,
      refillInterval: 799212,
    },
    remaining: 1000,
  };
  
  const res = await sdk.putV1KeysKeyId(keyId, requestBody);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `keyId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `requestBody`                                                                                                                                                                  | [operations.PutV1KeysKeyIdRequestBody](../../models/operations/putv1keyskeyidrequestbody.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.PutV1KeysKeyIdResponse](../../models/operations/putv1keyskeyidresponse.md)>**
### Errors

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

## getV1KeysKeyId

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.getV1KeysKeyId();

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetV1KeysKeyIdResponse](../../models/operations/getv1keyskeyidresponse.md)>**
### Errors

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

## deleteV1KeysKeyId

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.deleteV1KeysKeyId();

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteV1KeysKeyIdResponse](../../models/operations/deletev1keyskeyidresponse.md)>**
### Errors

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

## postV1Keys

### Example Usage

```typescript
import { SDK } from "openapi";
import { PostV1KeysType } from "openapi/models/operations";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const requestBody = {
    apiId: "api_123",
    name: "my key",
    ownerId: "team_123",
    meta: {
      "billingTier": "string",
      "trialEnds": "string",
    },
    expires: 1623869797161,
    remaining: 1000,
    ratelimit: {
      type: PostV1KeysType.Fast,
      limit: 296588,
      refillRate: 49354,
      refillInterval: 360121,
    },
  };
  
  const res = await sdk.postV1Keys(requestBody);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `requestBody`                                                                                                                                                                  | [operations.PostV1KeysRequestBody](../../models/operations/postv1keysrequestbody.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostV1KeysResponse](../../models/operations/postv1keysresponse.md)>**
### Errors

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

## postV1KeysVerify

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.postV1KeysVerify({
    apiId: "api_1234",
    key: "sk_1234",
  });

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1KeysVerifyRequestBody](../../models/operations/postv1keysverifyrequestbody.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostV1KeysVerifyResponse](../../models/operations/postv1keysverifyresponse.md)>**
### Errors

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

## postV1Apis

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.postV1Apis({
    name: "my-api",
  });

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1ApisRequestBody](../../models/operations/postv1apisrequestbody.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostV1ApisResponse](../../models/operations/postv1apisresponse.md)>**
### Errors

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

## getV1ApisApiId

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const apiId = "api_1234";
  
  const res = await sdk.getV1ApisApiId(apiId);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `apiId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.GetV1ApisApiIdResponse](../../models/operations/getv1apisapiidresponse.md)>**
### Errors

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

## deleteV1ApisApiId

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const apiId = "api_1234";
  
  const res = await sdk.deleteV1ApisApiId(apiId);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `apiId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.DeleteV1ApisApiIdResponse](../../models/operations/deletev1apisapiidresponse.md)>**
### Errors

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

## getV1ApisApiIdKeys

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const apiId = "api_1234";
  const limit = 100;
  const offset = 2757.36;
  const ownerId = "string";
  
  const res = await sdk.getV1ApisApiIdKeys(apiId, limit, offset, ownerId);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `apiId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `limit`                                                                                                                                                                        | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `offset`                                                                                                                                                                       | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `ownerId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.GetV1ApisApiIdKeysResponse](../../models/operations/getv1apisapiidkeysresponse.md)>**
### Errors

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
