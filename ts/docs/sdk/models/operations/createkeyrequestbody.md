# CreateKeyRequestBody


## Fields

| Field                                                                                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                 | Example                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apiId`                                                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                          | Choose an `API` where this key should be created.                                                                                                                                                                                                                                                                                                           | api_123                                                                                                                                                                                                                                                                                                                                                     |
| `byteLength`                                                                                                                                                                                                                                                                                                                                                | *number*                                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                          | The byte length used to generate your key determines its entropy as well as its length. Higher is better, but keys become longer and more annoying to handle. The default is 16 bytes, or 2^^128 possible combinations.                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                             |
| `enabled`                                                                                                                                                                                                                                                                                                                                                   | *boolean*                                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                          | Sets if key is enabled or disabled. Disabled keys are not valid.                                                                                                                                                                                                                                                                                            | false                                                                                                                                                                                                                                                                                                                                                       |
| `expires`                                                                                                                                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                          | You can auto expire keys by providing a unix timestamp in milliseconds. Once Keys expire they will automatically be disabled and are no longer valid unless you enable them again.                                                                                                                                                                          | 1623869797161                                                                                                                                                                                                                                                                                                                                               |
| `meta`                                                                                                                                                                                                                                                                                                                                                      | Record<string, *any*>                                                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                          | This is a place for dynamic meta data, anything that feels useful for you should go here                                                                                                                                                                                                                                                                    | {"billingTier":"PRO","trialEnds":"2023-06-16T17:16:37.161Z"}                                                                                                                                                                                                                                                                                                |
| `name`                                                                                                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                          | The name for your Key. This is not customer facing.                                                                                                                                                                                                                                                                                                         | my key                                                                                                                                                                                                                                                                                                                                                      |
| `ownerId`                                                                                                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                          | Your user’s Id. This will provide a link between Unkey and your customer record.<br/>When validating a key, we will return this back to you, so you can clearly identify your user from their api key.                                                                                                                                                      | team_123                                                                                                                                                                                                                                                                                                                                                    |
| `prefix`                                                                                                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                          | To make it easier for your users to understand which product an api key belongs to, you can add prefix them.<br/><br/>For example Stripe famously prefixes their customer ids with cus_ or their api keys with sk_live_.<br/><br/>The underscore is automatically added if you are defining a prefix, for example: "prefix": "abc" will result in a key like abc_xxxxxxxxx<br/> |                                                                                                                                                                                                                                                                                                                                                             |
| `ratelimit`                                                                                                                                                                                                                                                                                                                                                 | [operations.Ratelimit](../../../sdk/models/operations/ratelimit.md)                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                          | Unkey comes with per-key ratelimiting out of the box.                                                                                                                                                                                                                                                                                                       | {"type":"fast","limit":10,"refillRate":1,"refillInterval":60}                                                                                                                                                                                                                                                                                               |
| `refill`                                                                                                                                                                                                                                                                                                                                                    | [operations.Refill](../../../sdk/models/operations/refill.md)                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                          | Unkey enables you to refill verifications for each key at regular intervals.                                                                                                                                                                                                                                                                                | {"interval":"daily","amount":100}                                                                                                                                                                                                                                                                                                                           |
| `remaining`                                                                                                                                                                                                                                                                                                                                                 | *number*                                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                          | You can limit the number of requests a key can make. Once a key reaches 0 remaining requests, it will automatically be disabled and is no longer valid unless you update it.<br/><br/>[Learn more](https://unkey.dev/docs/features/remaining)                                                                                                               | 1000                                                                                                                                                                                                                                                                                                                                                        |
| `roles`                                                                                                                                                                                                                                                                                                                                                     | *string*[]                                                                                                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                          | A list of roles that this key should have. New roles will be created if they don't exist yet.                                                                                                                                                                                                                                                               | ["admin","finance"]                                                                                                                                                                                                                                                                                                                                         |