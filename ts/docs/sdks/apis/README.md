# Apis
(*apis*)

### Available Operations

* [createApi](#createapi)
* [deleteApi](#deleteapi)
* [getApi](#getapi)
* [listKeys](#listkeys)

## createApi

### Example Usage

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

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateApiRequestBody](../../sdk/models/operations/createapirequestbody.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateApiResponse](../../sdk/models/operations/createapiresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteApi

### Example Usage

```typescript
import { Unkey } from "@unkey/api";

async function run() {
  const sdk = new Unkey({
    rootKey: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.apis.deleteApi({
    apiId: "api_1234",
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
| `request`                                                                              | [operations.DeleteApiRequestBody](../../sdk/models/operations/deleteapirequestbody.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteApiResponse](../../sdk/models/operations/deleteapiresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getApi

### Example Usage

```typescript
import { Unkey } from "@unkey/api";
import { GetApiRequest } from "@unkey/api/dist/sdk/models/operations";

async function run() {
  const sdk = new Unkey({
    rootKey: "<YOUR_BEARER_TOKEN_HERE>",
  });
const apiId: string = "api_1234";

  const res = await sdk.apis.getApi(apiId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `apiId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | api_1234                                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetApiResponse](../../sdk/models/operations/getapiresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listKeys

### Example Usage

```typescript
import { Unkey } from "@unkey/api";
import { ListKeysRequest } from "@unkey/api/dist/sdk/models/operations";

async function run() {
  const sdk = new Unkey({
    rootKey: "<YOUR_BEARER_TOKEN_HERE>",
  });
const apiId: string = "api_1234";
const cursor: string = "string";
const limit: number = 100;
const ownerId: string = "string";

  const res = await sdk.apis.listKeys(apiId, cursor, limit, ownerId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `apiId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | api_1234                                                     |
| `cursor`                                                     | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `limit`                                                      | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          | 100                                                          |
| `ownerId`                                                    | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListKeysResponse](../../sdk/models/operations/listkeysresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
