<!-- Start SDK Example Usage [usage] -->
```go
package main

import (
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
	s := openapi.New(
		openapi.WithSecurity(shared.Security{
			RootKey: openapi.String("<YOUR_BEARER_TOKEN_HERE>"),
		}),
	)

	ctx := context.Background()
	res, err := s.Apis.CreateAPI(ctx, operations.CreateAPIRequestBody{
		Name: "my-api",
	})
	if err != nil {
		log.Fatal(err)
	}

	if res.Object != nil {
		// handle response
	}
}

```
<!-- End SDK Example Usage [usage] -->