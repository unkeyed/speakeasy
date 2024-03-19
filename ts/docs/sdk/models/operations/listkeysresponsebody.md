# ListKeysResponseBody

The configuration for an api


## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                            | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The cursor to use for the next page of results, if no cursor is returned, there are no more results | eyJrZXkiOiJrZXlfMTIzNCJ9                                                                            |
| `keys`                                                                                              | [shared.Key](../../../sdk/models/shared/key.md)[]                                                   | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `total`                                                                                             | *number*                                                                                            | :heavy_check_mark:                                                                                  | The total number of keys for this api                                                               |                                                                                                     |