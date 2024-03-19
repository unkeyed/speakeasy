<!-- Start SDK Example Usage [usage] -->
```typescript
import { Unkey } from "@unkey/api";

async function run() {
    const sdk = new Unkey({
        rootKey: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const res = await sdk.apis.createApi({
        name: "my-api",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->