# Refill

Unkey enables you to refill verifications for each key at regular intervals.


## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `interval`                                                                                         | [operations.Interval](../../models/operations/interval.md)                                         | :heavy_check_mark:                                                                                 | Unkey will automatically refill verifications at the set interval.                                 |
| `amount`                                                                                           | *number*                                                                                           | :heavy_check_mark:                                                                                 | The number of verifications to refill for each occurrence is determined individually for each key. |