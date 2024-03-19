# Refill

Unkey allows you to refill remaining verifications on a key on a regular interval.


## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `amount`                                                          | *number*                                                          | :heavy_check_mark:                                                | Resets `remaining` to this value every interval.                  | 100                                                               |
| `interval`                                                        | [shared.Interval](../../../sdk/models/shared/interval.md)         | :heavy_check_mark:                                                | Determines the rate at which verifications will be refilled.      | daily                                                             |
| `lastRefillAt`                                                    | *number*                                                          | :heavy_minus_sign:                                                | The unix timestamp in miliseconds when the key was last refilled. | 100                                                               |