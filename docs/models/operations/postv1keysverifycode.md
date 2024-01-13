# PostV1KeysVerifyCode

If the key is invalid this field will be set to the reason why it is invalid.
Possible values are:
- NOT_FOUND: the key does not exist or has expired
- FORBIDDEN: the key is not allowed to access the api
- USAGE_EXCEEDED: the key has exceeded its request limit
- RATE_LIMITED: the key has been ratelimited,



## Values

| Name            | Value           |
| --------------- | --------------- |
| `NotFound`      | NOT_FOUND       |
| `Forbidden`     | FORBIDDEN       |
| `UsageExceeded` | USAGE_EXCEEDED  |
| `RateLimited`   | RATE_LIMITED    |
| `Unauthorized`  | UNAUTHORIZED    |
| `Disabled`      | DISABLED        |