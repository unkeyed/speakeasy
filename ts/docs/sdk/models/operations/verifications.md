# Verifications


## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `rateLimited`                                        | *number*                                             | :heavy_check_mark:                                   | The number of requests that were rate limited        | 10                                                   |
| `success`                                            | *number*                                             | :heavy_check_mark:                                   | The number of successful requests                    | 100                                                  |
| `time`                                               | *number*                                             | :heavy_check_mark:                                   | The timestamp of the usage data                      | 1620000000000                                        |
| `usageExceeded`                                      | *number*                                             | :heavy_check_mark:                                   | The number of requests that exceeded the usage limit | 0                                                    |