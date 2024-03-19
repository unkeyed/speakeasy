# Verifications


## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `RateLimited`                                        | *float64*                                            | :heavy_check_mark:                                   | The number of requests that were rate limited        | 10                                                   |
| `Success`                                            | *float64*                                            | :heavy_check_mark:                                   | The number of successful requests                    | 100                                                  |
| `Time`                                               | *int64*                                              | :heavy_check_mark:                                   | The timestamp of the usage data                      | 1620000000000                                        |
| `UsageExceeded`                                      | *float64*                                            | :heavy_check_mark:                                   | The number of requests that exceeded the usage limit | 0                                                    |