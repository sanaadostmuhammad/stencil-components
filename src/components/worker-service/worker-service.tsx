import { Component, h, Prop, Watch, State } from '@stencil/core';
import { IWorkerService } from '../../utils/utils';

@Component({
  tag: 'worker-service',
  styleUrl: 'worker-service.css',
  shadow: true
})
export class WorkerService {
  @Prop({ mutable: true, reflectToAttr: true }) service: IWorkerService;
  @State() isChecked = false;

  @Watch('isChecked')
  watchHandler(newValue: boolean) {
    this.service.selected = newValue;
  }
  componentDidLoad() {
    this.isChecked = this.service.selected;
  }
  showServiceDetail(event) {
    console.log(event);
  }
  toggleSelection() {
    this.isChecked = !this.isChecked;
  }
  render() {
    return (
      <ion-row align-items-center>
        <ion-col size="10">
          <ion-tab tab="tab1">this is an ionic core tab</ion-tab>
          <ion-item onClick={this.toggleSelection.bind(this)}>
            <ion-label text-wrap>{this.service.name}</ion-label>
            <ion-checkbox
              id="serviceCheck"
              slot="start"
              value={this.service.id}
              checked={this.service.selected}
            ></ion-checkbox>
          </ion-item>
        </ion-col>
        {this.isChecked ? (
          <ion-col align-self-center size="2">
            <ion-button
              class={this.service.isInfoHighPriority ? 'primary' : 'secondary'}
              onClick={this.showServiceDetail.bind(this)}
              fill="clear"
            >
              {this.service.isInfoHighPriority ? (
                <ion-icon
                  color={
                    this.service.isInfoHighPriority ? 'primary' : 'secondary'
                  }
                  slot="icon-only"
                  name="information-circle"
                  class="m-i-flipped"
                ></ion-icon>
              ) : (
                  <ion-icon
                    color={
                      this.service.isInfoHighPriority ? 'primary' : 'secondary'
                    }
                    slot="icon-only"
                    name="information-circle-outline"
                  ></ion-icon>
                )}
            </ion-button>
          </ion-col>
        ) : (
            ''
          )}
      </ion-row>
    );
  }
}
