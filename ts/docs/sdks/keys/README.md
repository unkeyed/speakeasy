# Keys
(*keys*)

### Available Operations

* [createKey](#createkey)
* [deleteKey](#deletekey)
* [getKey](#getkey)
* [getVerifications](#getverifications)
* [updateKey](#updatekey)
* [updateRemaining](#updateremaining)
* [verifyKey](#verifykey)

## createKey

### Example Usage

```typescript
import { Unkey } from "@unkey/api";
import { Interval, TypeT } from "@unkey/api/dist/sdk/models/operations";

async function run() {
  const sdk = new Unkey({
    rootKey: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.keys.createKey({
    apiId: "api_123",
    enabled: false,
    expires: 1623869797161,
    meta: {
      "billingTier": "PRO",
      "trialEnds": "2023-06-16T17:16:37.161Z",
    },
    name: "my key",
    ownerId: "team_123",
    ratelimit: {
      limit: 10,
      refillInterval: 60,
      refillRate: 1,
      type: TypeT.Fast,
    },
    refill: {
      amount: 100,
      interval: Interval.Daily,
    },
    remaining: 1000,
    roles: [
      "admin",
      "finance",
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateKeyRequestBody](../../sdk/models/operations/createkeyrequestbody.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateKeyResponse](../../sdk/models/operations/createkeyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteKey

### Example Usage

```typescript
import { Unkey } from "@unkey/api";

async function run() {
  const sdk = new Unkey({
    rootKey: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.keys.deleteKey({
    keyId: "key_1234",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteKeyRequestBody](../../sdk/models/operations/deletekeyrequestbody.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteKeyResponse](../../sdk/models/operations/deletekeyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getKey

### Example Usage

```typescript
import { Unkey } from "@unkey/api";
import { GetKeyRequest } from "@unkey/api/dist/sdk/models/operations";

async function run() {
  const sdk = new Unkey({
    rootKey: "<YOUR_BEARER_TOKEN_HERE>",
  });
const keyId: string = "key_1234";

  const res = await sdk.keys.getKey(keyId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `keyId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | key_1234                                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetKeyResponse](../../sdk/models/operations/getkeyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getVerifications

### Example Usage

```typescript
import { Unkey } from "@unkey/api";
import { Granularity } from "@unkey/api/dist/sdk/models/operations";

async function run() {
  const sdk = new Unkey({
    rootKey: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.keys.getVerifications({
    end: 1620000000000,
    granularity: Granularity.Day,
    keyId: "key_1234",
    ownerId: "chronark",
    start: 1620000000000,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetVerificationsRequest](../../sdk/models/operations/getverificationsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetVerificationsResponse](../../sdk/models/operations/getverificationsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateKey

### Example Usage

```typescript
import { Unkey } from "@unkey/api";
import { UpdateKeyInterval, UpdateKeyType } from "@unkey/api/dist/sdk/models/operations";

async function run() {
  const sdk = new Unkey({
    rootKey: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.keys.updateKey({
    enabled: true,
    expires: 0,
    keyId: "key_123",
    meta: {
      "roles": "string",
      "stripeCustomerId": "cus_1234",
    },
    name: "Customer X",
    ownerId: "user_123",
    ratelimit: {
      limit: 10,
      refillInterval: 60,
      refillRate: 1,
      type: UpdateKeyType.Fast,
    },
    refill: {
      amount: 100,
      interval: UpdateKeyInterval.Daily,
    },
    remaining: 1000,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateKeyRequestBody](../../sdk/models/operations/updatekeyrequestbody.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateKeyResponse](../../sdk/models/operations/updatekeyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateRemaining

### Example Usage

```typescript
import { Unkey } from "@unkey/api";
import { Op } from "@unkey/api/dist/sdk/models/operations";

async function run() {
  const sdk = new Unkey({
    rootKey: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.keys.updateRemaining({
    keyId: "key_123",
    op: Op.Set,
    value: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateRemainingRequestBody](../../sdk/models/operations/updateremainingrequestbody.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateRemainingResponse](../../sdk/models/operations/updateremainingresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## verifyKey

### Example Usage

```typescript
import { Unkey } from "@unkey/api";

async function run() {
  const sdk = new Unkey({
    rootKey: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.keys.verifyKey({
    apiId: "api_1234",
    key: "sk_1234",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.V1KeysVerifyKeyRequest](../../sdk/models/shared/v1keysverifykeyrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.VerifyKeyResponse](../../sdk/models/operations/verifykeyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
