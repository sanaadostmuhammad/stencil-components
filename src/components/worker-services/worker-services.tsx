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

  @Watch('data')
  dataDidChangeHandler(newValue: string) {
    this.services = JSON.parse(newValue);
  }
  componentDidLoad() {
    console.log('Component has been rendered');
  }
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
