# UpdateKeyResponse


## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `ContentType`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | HTTP response content type for this operation                                                  |
| `StatusCode`                                                                                   | *int*                                                                                          | :heavy_check_mark:                                                                             | HTTP response status code for this operation                                                   |
| `RawResponse`                                                                                  | [*http.Response](https://pkg.go.dev/net/http#Response)                                         | :heavy_check_mark:                                                                             | Raw HTTP response; suitable for custom response parsing                                        |
| `Object`                                                                                       | [*operations.UpdateKeyResponseBody](../../../pkg/models/operations/updatekeyresponsebody.md)   | :heavy_minus_sign:                                                                             | The key was successfully updated, it may take up to 30s for this to take effect in all regions |