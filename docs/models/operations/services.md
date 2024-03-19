# Services


## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `metrics`                                    | *string*                                     | :heavy_check_mark:                           | The name of the connected metrics service    | AxiomMetrics                                 |
| `logger`                                     | *string*                                     | :heavy_check_mark:                           | The name of the connected logger service     | AxiomLogger or ConsoleLogger                 |
| `ratelimit`                                  | *string*                                     | :heavy_check_mark:                           | The name of the connected ratelimit service  |                                              |
| `usagelimit`                                 | *string*                                     | :heavy_check_mark:                           | The name of the connected usagelimit service |                                              |
| `analytics`                                  | *string*                                     | :heavy_check_mark:                           | The name of the connected analytics service  |                                              |