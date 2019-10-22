# worker-services



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute | Description | Type               | Default |
| ---------- | --------- | ----------- | ------------------ | ------- |
| `services` | --        |             | `IWorkerService[]` | `[]`    |


## Dependencies

### Depends on

- ion-grid
- [worker-service](../worker-service)

### Graph
```mermaid
graph TD;
  worker-services --> ion-grid
  worker-services --> worker-service
  worker-service --> ion-row
  worker-service --> ion-col
  worker-service --> ion-tab
  worker-service --> ion-item
  worker-service --> ion-label
  worker-service --> ion-checkbox
  worker-service --> ion-button
  worker-service --> ion-icon
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-button --> ion-ripple-effect
  style worker-services fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
