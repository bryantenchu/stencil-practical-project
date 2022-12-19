# pichincha-result



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type                   | Default     |
| --------------- | ---------------- | ----------- | ---------------------- | ----------- |
| `cancel`        | `cancel`         |             | `string`               | `undefined` |
| `done`          | `done`           |             | `string`               | `undefined` |
| `primaryText`   | `primary-text`   |             | `string`               | `undefined` |
| `secondaryText` | `secondary-text` |             | `string`               | `undefined` |
| `size`          | `size`           |             | `string`               | `undefined` |
| `type`          | `type`           |             | `"error" \| "success"` | `undefined` |


## Dependencies

### Depends on

- [pichincha-info](../../molecules/info)
- [pichincha-button](../../atoms/button)

### Graph
```mermaid
graph TD;
  pichincha-result --> pichincha-info
  pichincha-result --> pichincha-button
  pichincha-info --> pichincha-icon-result
  pichincha-info --> pichincha-text
  style pichincha-result fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
