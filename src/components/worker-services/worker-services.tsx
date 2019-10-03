import { Component, h, Prop, Watch } from '@stencil/core';
import { IWorkerService } from '../../utils/utils';

@Component({
  tag: 'worker-services',
  styleUrl: 'worker-services.css',
  shadow: true
})
export class WorkerServices {
  @Prop({ mutable: true, reflectToAttr: true, reflect: true })
  services: IWorkerService[] = [];

  render() {
    return [
      <ion-grid>
        {this.services.map(service => (
          <worker-service service={service}></worker-service>
        ))}
      </ion-grid>
    ];
  }
}
