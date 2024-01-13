# PostV1KeysUpdateKeyRefill

Unkey enables you to refill verifications for each key at regular intervals.


## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `interval`                                                                                                                                | [operations.PostV1KeysUpdateKeyInterval](../../models/operations/postv1keysupdatekeyinterval.md)                                          | :heavy_check_mark:                                                                                                                        | Unkey will automatically refill verifications at the set interval. If null is used the refill functionality will be removed from the key. |
| `amount`                                                                                                                                  | *number*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | The amount of verifications to refill for each occurrence is determined individually for each key.                                        |