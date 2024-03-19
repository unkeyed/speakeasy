# Liveness
(*liveness*)

### Available Operations

* [getV1Liveness](#getv1liveness)

## getV1Liveness

### Example Usage

```typescript
import { Unkey } from "@unkey/api";

async function run() {
  const sdk = new Unkey({
    rootKey: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.liveness.getV1Liveness();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1LivenessResponse](../../sdk/models/operations/getv1livenessresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
